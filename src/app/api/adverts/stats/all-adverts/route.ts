import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const skip = (page - 1) * limit;

  try {
    const adverts = await prisma.adverts.findMany({
      skip,
      take: limit,
      orderBy: {
        created_at: "desc",
      },
      select: {
        id: true,
        slug: true,
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

    const total = await prisma.adverts.count();

    return NextResponse.json({
      adverts,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Erro ao buscar anúncios:", error);
    return NextResponse.json(
      { error: "Erro ao buscar anúncios" },
      { status: 500 }
    );
  }
}
