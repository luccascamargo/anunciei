import { NextResponse } from "next/server";
import { AsyncParams } from "@/@types/FilterAdverts";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: AsyncParams }
) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { error: "Parâmetro brand é obrigatório" },
        { status: 400 }
      );
    }

    const models = await prisma.models.findMany({
      where: {
        brands: {
          slug,
        },
      },
      select: {
        id: true,
        name: true,
        slug: true,
      },
    });

    return NextResponse.json(models);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao buscar modelos" },
      { status: 500 }
    );
  }
}
