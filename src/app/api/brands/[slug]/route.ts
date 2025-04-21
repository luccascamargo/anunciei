import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { AsyncParams } from "@/@types/FilterAdverts";
import { Category } from "@prisma/client";

const categoryMap: Record<string, Category> = {
  carros: "CARS",
  caminhoes: "TRUCKS",
  motos: "MOTORCYCLES",
};

export async function GET(
  request: Request,
  { params }: { params: AsyncParams }
) {
  const { slug: type } = await params;

  if (!type || !Object.keys(categoryMap).includes(type)) {
    return NextResponse.json(
      {
        error: "Categoria inválida. Escolha entre carros, caminhoes ou motos.",
      },
      { status: 400 }
    );
  }

  try {
    const brands = await prisma.brands.findMany({
      where: { category: categoryMap[type] },
      select: {
        id: true,
        name: true,
        slug: true,
      },
    });

    return NextResponse.json(brands);
  } catch (error) {
    console.error("Erro ao buscar marcas:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
