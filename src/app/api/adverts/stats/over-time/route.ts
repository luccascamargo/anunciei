import { verifyJwt } from "@/lib/auth";
import { prisma } from "@/lib/prisma"; // Certifique-se de que o Prisma está configurado
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

    // Buscar anúncios do usuário no banco de dados
    const adverts = await prisma.adverts.findMany({
      where: {
        user_id: user_id,
        status: { not: "REQUESTED" },
        created_at: { gte: startDate, lte: endDate },
      },
      orderBy: { created_at: "asc" },
      select: {
        created_at: true,
        view_count: true,
        contact_count: true,
      },
    });

    const statsByMonth = adverts.reduce(
      (acc, advert) => {
        const month = advert.created_at.toLocaleString("pt-BR", {
          month: "short",
        });
        if (!acc[month]) {
          acc[month] = {
            name: month,
            visualizacoes: 0,
            contatos: 0,
          };
        }
        acc[month].visualizacoes += advert.view_count;
        acc[month].contatos += advert.contact_count;
        return acc;
      },
      {} as Record<
        string,
        {
          name: string;
          visualizacoes: number;
          contatos: number;
        }
      >
    );

    // Converter o objeto em um array
    const statsArray = Object.values(statsByMonth);

    return NextResponse.json(statsArray, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Algo de errado aconteceu" },
      { status: 500 }
    );
  }
}
