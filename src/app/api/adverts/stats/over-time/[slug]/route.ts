import { verifyJwt } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
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

    // Verificar se o anúncio pertence ao usuário
    const advert = await prisma.adverts.findFirst({
      where: {
        slug,
        user_id,
        status: { not: "REQUESTED" },
      },
    });

    if (!advert) {
      return NextResponse.json(
        { message: "Anúncio não encontrado ou não pertence ao usuário" },
        { status: 404 }
      );
    }

    // Buscar visualizações agrupadas por mês
    const visits = await prisma.visit.groupBy({
      by: ["advert_id", "created_ad"],
      orderBy: { created_ad: "asc" },
      where: {
        advert_id: advert.id,
        created_ad: { gte: startDate, lte: endDate },
      },
      _count: {
        _all: true,
      },
    });

    // Buscar contatos agrupados por mês
    const contacts = await prisma.contact.groupBy({
      by: ["advert_id", "created_ad"],
      orderBy: { created_ad: "asc" },
      where: {
        advert_id: advert.id,
        created_ad: { gte: startDate, lte: endDate },
      },
      _count: {
        _all: true,
      },
    });

    // Acumular dados por mês
    const statsMap: Record<
      string,
      { visualizacoes: number; contatos: number }
    > = {};

    visits.forEach((visit) => {
      const month = new Date(visit.created_ad).toLocaleString("pt-BR", {
        month: "short",
      });

      if (!statsMap[month]) {
        statsMap[month] = { visualizacoes: 0, contatos: 0 };
      }

      statsMap[month].visualizacoes += visit._count._all;
    });

    contacts.forEach((contact) => {
      const month = new Date(contact.created_ad).toLocaleString("pt-BR", {
        month: "short",
      });

      if (!statsMap[month]) {
        statsMap[month] = { visualizacoes: 0, contatos: 0 };
      }

      statsMap[month].contatos += contact._count._all;
    });

    // Converter o objeto acumulado em um array
    const stats = Object.entries(statsMap).map(([month, data]) => ({
      name: month,
      visualizacoes: data.visualizacoes,
      contatos: data.contatos,
    }));

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Algo de errado aconteceu" },
      { status: 500 }
    );
  }
}
