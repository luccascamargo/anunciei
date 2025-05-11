import { prisma } from "@/lib/prisma";
import { JwtPayload, verify } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
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

  const searchParams = request.nextUrl.searchParams;

  const page = searchParams.get("page");
  const take = searchParams.get("take");
  const skip = (Number(page) - 1) * Number(take);

  const adverts = await prisma.adverts.findMany({
    take: Number(take) || 10,
    skip: Number(skip) || 0,
    select: {
      id: true,
      status: true,
    },
  });

  const total = await prisma.adverts.count();

  if (!adverts) {
    return NextResponse.json(
      { message: "Nenhum anúncio encontrado" },
      { status: 404 }
    );
  }

  const nextPage = skip + Number(take) < total ? Number(page) + 1 : null;

  return NextResponse.json({
    data: adverts,
    pagination: {
      page: Number(page),
      nextPage,
      total,
    },
  });
}
