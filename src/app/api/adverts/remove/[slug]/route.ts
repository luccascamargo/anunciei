import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { DeleteFiles } from "@/lib/upload-s3";
import { verifyJwt } from "@/lib/auth";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug: id } = params;

    const token = request.cookies.get("accessToken")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "Token de autenticação não encontrado" },
        { status: 401 }
      );
    }
    const user_id = await verifyJwt(token);
    if (!user_id) {
      return NextResponse.json(
        { message: "Token de autenticação inválido" },
        { status: 401 }
      );
    }
    const advert = await prisma.adverts.findUnique({
      where: {
        id,
        user_id,
      },
      include: {
        images: {
          select: {
            key: true,
          },
        },
        optionals: true,
        user: true,
      },
    });

    if (!advert) {
      return NextResponse.json(
        { error: "Anúncio não encontrado" },
        { status: 404 }
      );
    }

    await prisma.adverts.delete({
      where: {
        id,
      },
    });

    if (advert.images.length > 0) {
      await DeleteFiles(advert.images);
    }

    return NextResponse.json({ message: "Anúncio removido com sucesso" });
  } catch (error) {
    console.error("Erro ao remover anúncio:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
