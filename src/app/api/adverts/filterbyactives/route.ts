import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyJwt } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    // Verifica o token do cabeçalho Authorization
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

    const adverts = await prisma.adverts.findMany({
      where: {
        user_id,
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

    return NextResponse.json(adverts);
  } catch (error) {
    console.error("Erro ao buscar anúncios ativos:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
