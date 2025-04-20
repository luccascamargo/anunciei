// scripts/sync-fipe.ts
import { prisma } from "@/lib/prisma";
import axios from "axios";
import slugify from "slugify";

// 👇 Configure os limites aqui
const LIMIT_BRANDS = 25;
const LIMIT_MODELS = 10;

const categories = {
  CARS: "https://brasilapi.com.br/api/fipe/marcas/v1/carros",
  MOTORCYCLES: "https://brasilapi.com.br/api/fipe/marcas/v1/motos",
  TRUCKS: "https://brasilapi.com.br/api/fipe/marcas/v1/caminhoes",
};

const categoryMapping = {
  CARS: "carros",
  MOTORCYCLES: "motos",
  TRUCKS: "caminhoes",
};

type Category = keyof typeof categories;

async function syncFipe() {
  for (const [category, url] of Object.entries(categories)) {
    console.log(`🔄 Sincronizando dados para: ${category}...`);

    const { data: allBrands } = await axios.get(url);
    const brands = allBrands.slice(0, LIMIT_BRANDS); // 👈 Limita marcas

    for (const brand of brands) {
      const slug = slugify(brand.nome, { lower: true, strict: true });

      // Primeiro verifica se a marca já existe pelo nome
      const existingBrand = await prisma.brands.findUnique({
        where: { name: brand.nome },
      });

      let brandCreated;

      if (existingBrand) {
        // Se existir, atualiza apenas se necessário
        brandCreated = await prisma.brands.update({
          where: { id: existingBrand.id },
          data: {
            category: category as Category,
          },
        });
      } else {
        // Se não existir, cria com um slug único
        let uniqueSlug = slug;
        let counter = 1;

        // Verifica se o slug já existe e adiciona um número se necessário
        while (
          await prisma.brands.findUnique({ where: { slug: uniqueSlug } })
        ) {
          uniqueSlug = `${slug}-${counter}`;
          counter++;
        }

        brandCreated = await prisma.brands.create({
          data: {
            name: brand.nome,
            slug: uniqueSlug,
            category: category as Category,
          },
        });
      }

      const { data: allModels } = await axios.get(
        `https://brasilapi.com.br/api/fipe/veiculos/v1/${
          categoryMapping[category as Category]
        }/${brand.valor}`
      );

      const models = allModels.slice(0, LIMIT_MODELS); // 👈 Limita modelos

      for (const model of models) {
        const modelSlug = slugify(model.modelo, { lower: true, strict: true });

        await prisma.models.upsert({
          where: { name: model.modelo },
          update: {
            name: model.modelo,
            category: category as Category,
            slug: modelSlug,
          },
          create: {
            name: model.modelo,
            slug: modelSlug,
            brand_id: brandCreated.id,
            category: category as Category,
          },
        });
      }
    }

    console.log(
      `✅ Sincronização de ${categoryMapping[category as Category]} concluída.`
    );
  }
}

syncFipe()
  .then(() => {
    console.log("🚀 Sincronização completa!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Erro durante sincronização:", err);
    process.exit(1);
  });
