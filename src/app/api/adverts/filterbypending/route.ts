import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyJwt } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    // Verifica o token do cabeçalho Authorization
    const authorizationHeader = request.headers.get("Authorization");
    if (!authorizationHeader) {
      return Response.json(
        { message: "Token de autenticação não encontrado" },
        { status: 401 }
      );
    }

    const token = authorizationHeader.replace("Bearer ", "");
    if (!token) {
      return Response.json(
        { message: "Token de autenticação inválido" },
        { status: 401 }
      );
    }

    const user_id = await verifyJwt(token);
    if (!user_id) {
      return Response.json(
        { message: "Token de autenticação inválido" },
        { status: 401 }
      );
    }

    const adverts = await prisma.adverts.findMany({
      where: {
        user_id,
        status: "REQUESTED",
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
    console.error("Erro ao buscar anúncios pendentes:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
