import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const optionals = await prisma.optional.findMany();
    return NextResponse.json(optionals);
  } catch {
    return NextResponse.json(
      { error: "Erro ao buscar opcionais" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const optional = await prisma.optional.create({
      data: body,
    });
    return NextResponse.json(optional);
  } catch {
    return NextResponse.json(
      { error: "Erro ao criar opcional" },
      { status: 500 }
    );
  }
}
