import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/lib/auth";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

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

    // Verifica se o anúncio existe e pertence ao usuário
    const advert = await prisma.adverts.findFirst({
      where: {
        id,
        user_id,
      },
    });

    if (!advert) {
      return NextResponse.json(
        { error: "Anúncio não encontrado" },
        { status: 404 }
      );
    }

    // Busca visitas e contatos no período
    const visits = await prisma.visit.findMany({
      where: {
        advert_id: id,
        created_ad: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const contacts = await prisma.contact.findMany({
      where: {
        advert_id: id,
        created_ad: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const totalViews = visits.reduce((sum, visit) => sum + visit.views, 0);
    const totalContacts = contacts.reduce(
      (sum, contact) => sum + contact.contacts,
      0
    );
    const conversionRate =
      totalViews > 0 ? (totalContacts / totalViews) * 100 : 0;

    const stats = {
      totalViews,
      totalContacts,
      conversionRate: conversionRate.toFixed(2) + "%",
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Erro ao exibir estatísticas:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
