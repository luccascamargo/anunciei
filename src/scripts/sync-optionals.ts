// scripts/sync-optionals.ts
import { prisma } from "@/lib/prisma";

// Lista de opcionais para serem adicionados
const optionals = [
  {
    name: "Ar Condicionado",
  },
  {
    name: "Direção Hidráulica",
  },
  {
    name: "Airbag",
  },
  {
    name: "ABS",
  },
  {
    name: "Vidros Elétricos",
  },
  {
    name: "Trava Elétrica",
  },
  {
    name: "Alarme",
  },
  {
    name: "Som Original",
  },
  {
    name: "Bluetooth",
  },
  {
    name: "GPS",
  },
  {
    name: "Câmera de Ré",
  },
  {
    name: "Sensor de Estacionamento",
  },
  {
    name: "Teto Solar",
  },
  {
    name: "Rodas de Liga Leve",
  },
  {
    name: "Piloto Automático",
  },
  {
    name: "Controle de Estabilidade",
  },
  {
    name: "Farol de Neblina",
  },
  {
    name: "Farol de Xenon",
  },
  {
    name: "Farol de LED",
  },
  {
    name: "Retrovisor Elétrico",
  },
  {
    name: "Retrovisor com Desembaçador",
  },
  {
    name: "Banco de Couro",
  },
  {
    name: "Banco Elétrico",
  },
  {
    name: "Banco com Aquecimento",
  },
  {
    name: "Volante Multifuncional",
  },
  {
    name: "Volante com Regulagem de Altura",
  },
  {
    name: "Computador de Bordo",
  },
  {
    name: "Chave Presencial",
  },
  {
    name: "Partida por Botão",
  },
  {
    name: "Isofix",
  },
  {
    name: "Encosto de Cabeça Traseiro",
  },
  {
    name: "Porta-Copos",
  },
  {
    name: "Tapete de Borracha",
  },
  {
    name: "Kit Multimídia",
  },
  {
    name: "Carregador USB",
  },
  {
    name: "Wi-Fi",
  },
  {
    name: "Apple CarPlay",
  },
  {
    name: "Android Auto",
  },
  {
    name: "Sistema de Som Premium",
  },
  {
    name: "Subwoofer",
  },
  {
    name: "Amplificador",
  },
];

async function syncOptionals() {
  console.log("🔄 Sincronizando opcionais...");

  for (const optional of optionals) {
    await prisma.optional.upsert({
      where: { name: optional.name },
      update: {
        name: optional.name,
      },
      create: {
        name: optional.name,
      },
    });

    console.log(`✅ Opcional "${optional.name}" sincronizado.`);
  }

  console.log("🚀 Sincronização de opcionais concluída!");
}

syncOptionals()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Erro durante sincronização:", err);
    process.exit(1);
  });
