import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/lib/auth";

export async function PATCH(request: NextRequest) {
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

    const user = await prisma.user.findUnique({
      where: { id: user_id },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        active: false,
      },
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
