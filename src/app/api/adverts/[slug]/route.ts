import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const advert = await prisma.adverts.findUnique({
      where: {
        slug,
        status: "ACTIVE",
      },
      include: {
        images: true,
        optionals: true,
        model: true,
        brand: true,
        user: {
          select: {
            id: true,
            name: true,
            lastname: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    if (!advert) {
      return NextResponse.json(
        { error: "Anúncio não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(advert);
  } catch (error) {
    console.error("Erro ao buscar anúncio:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
