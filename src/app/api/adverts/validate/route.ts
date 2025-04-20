import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get("user_id");
    const advert_id = searchParams.get("advert_id");

    if (!user_id || !advert_id) {
      return NextResponse.json(
        { error: "Parâmetros inválidos" },
        { status: 400 }
      );
    }

    const advert = await prisma.adverts.findFirst({
      where: {
        id: advert_id,
        user_id,
      },
      include: {
        images: {
          select: {
            url: true,
            id: true,
          },
        },
        optionals: {
          select: {
            id: true,
          },
        },
        brand: true,
        model: true,
      },
    });

    if (!advert) {
      return NextResponse.json(
        { error: "Anúncio não encontrado" },
        { status: 400 }
      );
    }

    return NextResponse.json({ advert });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
