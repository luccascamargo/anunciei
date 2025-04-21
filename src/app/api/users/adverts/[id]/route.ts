import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      {
        error: "É necessário id do usuário",
      },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findFirst({
      where: { id },
      select: {
        adverts: {
          include: {
            images: true,
            brand: true,
            model: true,
          },
        },
        email: true,
        created_at: true,
        name: true,
        lastname: true,
        image: true,
        phone: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
