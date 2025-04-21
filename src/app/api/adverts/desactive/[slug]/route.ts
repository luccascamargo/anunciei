import { verifyJwt } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug: id } = await params;

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
    if (!id) {
      return NextResponse.json({ error: "ID não encontrado" }, { status: 400 });
    }

    await prisma.adverts.update({
      where: {
        id,
        user_id,
      },
      data: {
        status: "INACTIVE",
      },
    });
    return NextResponse.json("Anúncio alterado com sucesso");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro ao desativar o anúncio" },
      { status: 500 }
    );
  }
}
