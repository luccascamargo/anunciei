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
    const { searchParams } = new URL(request.url);
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    if (!start || !end) {
      return NextResponse.json(
        { error: "Parâmetros de período (start e end) são obrigatórios" },
        { status: 400 }
      );
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    const adverts = await prisma.adverts.findMany({
      take: 5,
      orderBy: [
        {
          view_count: "desc",
        },
        {
          contact_count: "desc",
        },
      ],
      where: {
        user_id,
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        id: true,
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
        year_model: true,
        price: true,
        view_count: true,
        contact_count: true,
      },
    });

    const advertsResponse = adverts.map((advert) => ({
      id: advert.id,
      model: advert.model.name,
      brand: advert.brand.name,
      year_model: advert.year_model,
      view_count: advert.view_count,
      contact_count: advert.contact_count,
      conversion_rate:
        advert.view_count > 0
          ? parseFloat(
              ((advert.contact_count / advert.view_count) * 100).toFixed(2)
            )
          : 0,
    }));

    return NextResponse.json(advertsResponse);
  } catch (error) {
    console.error("Erro ao buscar anúncios:", error);
    return NextResponse.json(
      { error: "Erro ao buscar anúncios" },
      { status: 500 }
    );
  }
}
