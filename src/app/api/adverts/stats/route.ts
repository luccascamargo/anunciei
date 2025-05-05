import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/lib/auth";

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

    // Calcula o período anterior
    const diff = endDate.getTime() - startDate.getTime();
    const previousStartDate = new Date(startDate.getTime() - diff);
    const previousEndDate = new Date(endDate.getTime() - diff);

    // Estatísticas do período atual
    const totalViews = await prisma.visit.count({
      where: {
        created_ad: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const totalContacts = await prisma.contact.count({
      where: {
        created_ad: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    // Estatísticas do período anterior
    const previousTotalViews = await prisma.visit.count({
      where: {
        created_ad: {
          gte: previousStartDate,
          lte: previousEndDate,
        },
      },
    });

    const previousTotalContacts = await prisma.contact.count({
      where: {
        created_ad: {
          gte: previousStartDate,
          lte: previousEndDate,
        },
      },
    });

    // Calcula a taxa de conversão
    const conversionRate =
      totalViews > 0 ? (totalContacts / totalViews) * 100 : 0;
    const previousConversionRate =
      previousTotalViews > 0
        ? (previousTotalContacts / previousTotalViews) * 100
        : 0;

    // Calcula a variação percentual
    const viewsChange =
      previousTotalViews > 0
        ? ((totalViews - previousTotalViews) / previousTotalViews) * 100
        : totalViews > 0
          ? 100
          : 0;

    const contactsChange =
      previousTotalContacts > 0
        ? ((totalContacts - previousTotalContacts) / previousTotalContacts) *
          100
        : totalContacts > 0
          ? 100
          : 0;

    const conversionRateChange =
      previousConversionRate > 0
        ? ((conversionRate - previousConversionRate) / previousConversionRate) *
          100
        : conversionRate > 0
          ? 100
          : 0;

    const stats = {
      totalViews,
      totalContacts,
      conversionRate: conversionRate.toFixed(2) + "%",
      viewsChange: viewsChange.toFixed(2) + "%",
      contactsChange: contactsChange.toFixed(2) + "%",
      conversionRateChange: conversionRateChange.toFixed(2) + "%",
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
