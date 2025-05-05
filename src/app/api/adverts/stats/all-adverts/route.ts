import { verifyJwt } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
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
      orderBy: {
        created_at: "desc",
      },
      select: {
        id: true,
        slug: true,
        type: true,
        model: {
          select: {
            name: true,
          },
        },
        brand: {
          select: {
            name: true,
          },
        },
        status: true,
        price: true,
        created_at: true,
      },
    });

    return NextResponse.json(adverts);
  } catch (error) {
    console.error("Erro ao buscar anúncios:", error);
    return NextResponse.json(
      { error: "Erro ao buscar anúncios" },
      { status: 500 }
    );
  }
}
