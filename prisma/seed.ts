if (process.env.NODE_ENV === "production") {
  console.log("O script de seed não deve ser executado em produção.");
  process.exit(0);
}

import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

function getRandomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

async function main() {
  console.log("Seeding database...");

  await prisma.user.create({
    data: {
      name: "Lucas",
      lastname: "Camargo",
      email: "contato@anunciei.app",
      active: true,
      plan: "PRO",
      password: "$2a$12$.wgToqTs1JBAAB1TosiJauqc2cDqsARUKiPm7J8qER.0Y6aNT3x3S",
      role: "ADMIN",
    },
  });

  // Criar usuários
  const user = await prisma.user.create({
    data: {
      name: "Lucas",
      lastname: "Silva",
      email: "lucas.silva@example.com",
      phone: "123456789",
      active: true,
      plan: "PRO",
      password: "$2a$12$.wgToqTs1JBAAB1TosiJauqc2cDqsARUKiPm7J8qER.0Y6aNT3x3S",
    },
  });

  // Criar marcas
  const brand = await prisma.brands.create({
    data: {
      name: "Toyota",
      category: "CARS",
      slug: "toyota",
    },
  });

  // Criar modelos
  const model = await prisma.models.create({
    data: {
      name: "Corolla",
      slug: "corolla",
      category: "CARS",
      brands: {
        connect: { id: brand.id },
      },
    },
  });

  // Criar opcionais
  const optional1 = await prisma.optional.create({
    data: {
      name: "Ar-condicionado",
    },
  });

  const optional2 = await prisma.optional.create({
    data: {
      name: "Direção hidráulica",
    },
  });

  // Criar primeiro anúncio
  const advert1 = await prisma.adverts.create({
    data: {
      type: "Carro",
      year_model: 2022,
      color: "Preto",
      city: "São Paulo",
      formatted_city: "São Paulo - SP",
      state: "SP",
      formatted_state: "São Paulo",
      price: 90000,
      doors: "4",
      mileage: 15000,
      description: "Carro em ótimo estado, único dono.",
      formatted_description: "Carro em ótimo estado, único dono.",
      plate: "ABC-1234",
      transmission: "Automático",
      status: "ACTIVE",
      slug: "toyota-corolla-2022",
      emphasis: true,
      user: {
        connect: { id: user.id },
      },
      model: {
        connect: { id: model.id },
      },
      brand: {
        connect: { id: brand.id },
      },
      images: {
        create: [
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
        ],
      },
      view_count: 120,
      contact_count: 15,
      optionals: {
        connect: [{ id: optional1.id }, { id: optional2.id }],
      },
    },
  });

  // Criar segundo anúncio
  const advert2 = await prisma.adverts.create({
    data: {
      type: "Carro",
      year_model: 2021,
      color: "Branco",
      city: "Rio de Janeiro",
      formatted_city: "Rio de Janeiro - RJ",
      state: "RJ",
      formatted_state: "Rio de Janeiro",
      price: 80000,
      doors: "4",
      mileage: 20000,
      description: "Carro seminovo, bem conservado.",
      formatted_description: "Carro seminovo, bem conservado.",
      plate: "XYZ-5678",
      transmission: "Manual",
      status: "ACTIVE",
      slug: "toyota-corolla-2021",
      emphasis: false,
      user: {
        connect: { id: user.id },
      },
      model: {
        connect: { id: model.id },
      },
      brand: {
        connect: { id: brand.id },
      },
      images: {
        create: [
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
        ],
      },
      view_count: 80,
      contact_count: 10,
      optionals: {
        connect: [{ id: optional1.id }],
      },
    },
  });

  // Criar mais 5 anúncios
  const advert3 = await prisma.adverts.create({
    data: {
      type: "Carro",
      year_model: 2020,
      color: "Vermelho",
      city: "Belo Horizonte",
      formatted_city: "Belo Horizonte - MG",
      state: "MG",
      formatted_state: "Minas Gerais",
      price: 75000,
      doors: "4",
      mileage: 30000,
      description: "Carro bem conservado, com baixa quilometragem.",
      formatted_description: "Carro bem conservado, com baixa quilometragem.",
      plate: "DEF-1234",
      transmission: "Automático",
      status: "ACTIVE",
      slug: "toyota-corolla-2020",
      emphasis: false,
      user: {
        connect: { id: user.id },
      },
      model: {
        connect: { id: model.id },
      },
      brand: {
        connect: { id: brand.id },
      },
      images: {
        create: [
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
        ],
      },
      view_count: 60,
      contact_count: 8,
      optionals: {
        connect: [{ id: optional1.id }],
      },
    },
  });

  const advert4 = await prisma.adverts.create({
    data: {
      type: "Carro",
      year_model: 2019,
      color: "Azul",
      city: "Curitiba",
      formatted_city: "Curitiba - PR",
      state: "PR",
      formatted_state: "Paraná",
      price: 70000,
      doors: "4",
      mileage: 40000,
      description: "Carro em excelente estado, revisões em dia.",
      formatted_description: "Carro em excelente estado, revisões em dia.",
      plate: "GHI-5678",
      transmission: "Manual",
      status: "ACTIVE",
      slug: "toyota-corolla-2019",
      emphasis: false,
      user: {
        connect: { id: user.id },
      },
      model: {
        connect: { id: model.id },
      },
      brand: {
        connect: { id: brand.id },
      },
      images: {
        create: [
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
        ],
      },
      view_count: 50,
      contact_count: 5,
      optionals: {
        connect: [{ id: optional2.id }],
      },
    },
  });

  const advert5 = await prisma.adverts.create({
    data: {
      type: "Carro",
      year_model: 2023,
      color: "Prata",
      city: "Porto Alegre",
      formatted_city: "Porto Alegre - RS",
      state: "RS",
      formatted_state: "Rio Grande do Sul",
      price: 95000,
      doors: "4",
      mileage: 5000,
      description: "Carro novo, com garantia de fábrica.",
      formatted_description: "Carro novo, com garantia de fábrica.",
      plate: "JKL-9101",
      transmission: "Automático",
      status: "ACTIVE",
      slug: "toyota-corolla-2023",
      emphasis: true,
      user: {
        connect: { id: user.id },
      },
      model: {
        connect: { id: model.id },
      },
      brand: {
        connect: { id: brand.id },
      },
      images: {
        create: [
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
        ],
      },
      view_count: 150,
      contact_count: 20,
      optionals: {
        connect: [{ id: optional1.id }, { id: optional2.id }],
      },
    },
  });

  const advert6 = await prisma.adverts.create({
    data: {
      type: "Carro",
      year_model: 2018,
      color: "Preto",
      city: "Salvador",
      formatted_city: "Salvador - BA",
      state: "BA",
      formatted_state: "Bahia",
      price: 65000,
      doors: "4",
      mileage: 50000,
      description: "Carro econômico, ideal para o dia a dia.",
      formatted_description: "Carro econômico, ideal para o dia a dia.",
      plate: "MNO-1122",
      transmission: "Manual",
      status: "ACTIVE",
      slug: "toyota-corolla-2018",
      emphasis: false,
      user: {
        connect: { id: user.id },
      },
      model: {
        connect: { id: model.id },
      },
      brand: {
        connect: { id: brand.id },
      },
      images: {
        create: [
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
        ],
      },
      view_count: 40,
      contact_count: 3,
      optionals: {
        connect: [{ id: optional2.id }],
      },
    },
  });

  const advert7 = await prisma.adverts.create({
    data: {
      type: "Carro",
      year_model: 2024,
      color: "Branco",
      city: "Fortaleza",
      formatted_city: "Fortaleza - CE",
      state: "CE",
      formatted_state: "Ceará",
      price: 100000,
      doors: "4",
      mileage: 2000,
      description: "Carro de luxo, com todos os opcionais.",
      formatted_description: "Carro de luxo, com todos os opcionais.",
      plate: "PQR-3344",
      transmission: "Automático",
      status: "ACTIVE",
      slug: "toyota-corolla-2024",
      emphasis: true,
      user: {
        connect: { id: user.id },
      },
      model: {
        connect: { id: model.id },
      },
      brand: {
        connect: { id: brand.id },
      },
      images: {
        create: [
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
          {
            url: "https://anunciei.s3.sa-east-1.amazonaws.com/default-image.png",
            key: "default-image.png",
          },
        ],
      },
      view_count: 200,
      contact_count: 30,
      optionals: {
        connect: [{ id: optional1.id }, { id: optional2.id }],
      },
    },
  });

  // Criar visitas e contatos para o primeiro anúncio
  for (let i = 0; i < 20; i++) {
    const randomDate = getRandomDate(
      new Date(2025, 0, 1),
      new Date(2025, 4, 6)
    );

    await prisma.visit.create({
      data: {
        visitor_id: uuidv4(),
        created_ad: randomDate,
        adverts: {
          connect: { id: advert1.id },
        },
      },
    });

    if (i % 3 === 0) {
      await prisma.contact.create({
        data: {
          visitor_id: uuidv4(),
          created_ad: randomDate,
          adverts: {
            connect: { id: advert1.id },
          },
        },
      });
    }
  }

  // Criar visitas e contatos para o segundo anúncio
  for (let i = 0; i < 15; i++) {
    const randomDate = getRandomDate(
      new Date(2025, 0, 1),
      new Date(2025, 4, 6)
    );

    await prisma.visit.create({
      data: {
        visitor_id: uuidv4(),
        created_ad: randomDate,
        adverts: {
          connect: { id: advert2.id },
        },
      },
    });

    if (i % 4 === 0) {
      await prisma.contact.create({
        data: {
          visitor_id: uuidv4(),
          created_ad: randomDate,
          adverts: {
            connect: { id: advert2.id },
          },
        },
      });
    }
  }

  for (let i = 0; i < 35; i++) {
    const randomDate = getRandomDate(
      new Date(2025, 0, 1),
      new Date(2025, 4, 6)
    );

    await prisma.visit.create({
      data: {
        visitor_id: uuidv4(),
        created_ad: randomDate,
        adverts: {
          connect: { id: advert3.id },
        },
      },
    });

    if (i % 3 === 0) {
      await prisma.contact.create({
        data: {
          visitor_id: uuidv4(),
          created_ad: randomDate,
          adverts: {
            connect: { id: advert3.id },
          },
        },
      });
    }
  }

  for (let i = 0; i < 5; i++) {
    const randomDate = getRandomDate(
      new Date(2025, 0, 1),
      new Date(2025, 4, 6)
    );

    await prisma.visit.create({
      data: {
        visitor_id: uuidv4(),
        created_ad: randomDate,
        adverts: {
          connect: { id: advert4.id },
        },
      },
    });

    if (i % 3 === 0) {
      await prisma.contact.create({
        data: {
          visitor_id: uuidv4(),
          created_ad: randomDate,
          adverts: {
            connect: { id: advert4.id },
          },
        },
      });
    }
  }

  for (let i = 0; i < 200; i++) {
    const randomDate = getRandomDate(
      new Date(2025, 0, 1),
      new Date(2025, 4, 6)
    );

    await prisma.visit.create({
      data: {
        visitor_id: uuidv4(),
        created_ad: randomDate,
        adverts: {
          connect: { id: advert5.id },
        },
      },
    });

    if (i % 3 === 0) {
      await prisma.contact.create({
        data: {
          visitor_id: uuidv4(),
          created_ad: randomDate,
          adverts: {
            connect: { id: advert5.id },
          },
        },
      });
    }
  }

  for (let i = 0; i < 120; i++) {
    const randomDate = getRandomDate(
      new Date(2025, 0, 1),
      new Date(2025, 4, 6)
    );

    await prisma.visit.create({
      data: {
        visitor_id: uuidv4(),
        created_ad: randomDate,
        adverts: {
          connect: { id: advert6.id },
        },
      },
    });

    if (i % 3 === 0) {
      await prisma.contact.create({
        data: {
          visitor_id: uuidv4(),
          created_ad: randomDate,
          adverts: {
            connect: { id: advert6.id },
          },
        },
      });
    }
  }

  for (let i = 0; i < 300; i++) {
    const randomDate = getRandomDate(
      new Date(2025, 0, 1),
      new Date(2025, 4, 6)
    );

    await prisma.visit.create({
      data: {
        visitor_id: uuidv4(),
        created_ad: randomDate,
        adverts: {
          connect: { id: advert7.id },
        },
      },
    });

    if (i % 3 === 0) {
      await prisma.contact.create({
        data: {
          visitor_id: uuidv4(),
          created_ad: randomDate,
          adverts: {
            connect: { id: advert7.id },
          },
        },
      });
    }
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
