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

  const search = searchParams.get("search");
  const take = searchParams.get("take");
  console.log(search);

  const users = await prisma.user.findMany({
    take: Number(take) || 10,
    where: {
      name: {
        contains: search || "",
        mode: "insensitive",
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      created_at: true,
      updated_at: true,
      active: true,
    },
  });

  if (!users) {
    return NextResponse.json(
      { message: "Nenhum usuário encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(users, { status: 200 });
}
