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

      // Verifica se a marca já existe com o mesmo slug
      const existingBrand = await prisma.brands.findUnique({
        where: { slug },
      });

      if (existingBrand) {
        console.log(`🔄 Marca já existe com o slug: ${slug}. Ignorando.`);
        continue; // Pula para a próxima marca
      }

      // Cria a marca apenas se o slug não existir
      const brandCreated = await prisma.brands.create({
        data: {
          name: brand.nome,
          slug,
          category: category as Category,
        },
      });

      const { data: allModels } = await axios.get(
        `https://brasilapi.com.br/api/fipe/veiculos/v1/${
          categoryMapping[category as Category]
        }/${brand.valor}`
      );

      const models = allModels.slice(0, LIMIT_MODELS); // 👈 Limita modelos

      for (const model of models) {
        const modelSlug = slugify(model.modelo, { lower: true, strict: true });

        // Verifica se o modelo já existe com o mesmo slug
        const existingModel = await prisma.models.findUnique({
          where: { slug: modelSlug },
        });

        if (existingModel) {
          console.log(
            `🔄 Modelo já existe com o slug: ${modelSlug}. Ignorando.`
          );
          continue; // Pula para o próximo modelo
        }

        // Cria o modelo apenas se o slug não existir
        await prisma.models.create({
          data: {
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
