import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { AsyncParams } from "@/@types/FilterAdverts";

export async function GET(
  request: NextRequest,
  { params }: { params: AsyncParams }
) {
  try {
    const { slug: userId } = await params;

    if (!userId) {
      return NextResponse.json(
        { error: "ID do usuário não fornecido" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    const adverts = await prisma.adverts.findMany({
      where: {
        user_id: userId,
        status: "ACTIVE",
      },
      include: {
        images: {
          select: {
            url: true,
            id: true,
          },
        },
        brand: true,
        model: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return NextResponse.json({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      image: user.image,
      created_ad: user.created_at,
      adverts: adverts,
    });
  } catch (error) {
    console.error("Erro ao buscar anúncios do usuário:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
