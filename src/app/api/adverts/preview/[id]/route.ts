import { prisma } from "@/lib/prisma";
import { JwtPayload, verify } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      { message: "ID do anúncio não encontrado" },
      { status: 400 }
    );
  }

  const token = request.cookies.get("accessToken")?.value;
  if (!token) {
    return NextResponse.json(
      { message: "Token de autenticação não encontrado" },
      { status: 401 }
    );
  }
  const { role } = verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtPayload;

  if (!role || role !== "ADMIN") {
    return NextResponse.json(
      { message: "Token de autenticação inválido" },
      { status: 401 }
    );
  }

  const advert = await prisma.adverts.findFirst({
    where: {
      id,
    },
    include: {
      images: true,
      user: true,
      brand: true,
      model: true,
      optionals: true,
    },
  });

  if (!advert) {
    return NextResponse.json(
      { message: "Nenhum anúncio encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json({ advert });
}
