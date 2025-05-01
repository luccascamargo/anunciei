import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { data } = await request.json();

    if (!data.id) {
      return NextResponse.json(
        { error: "ID do anúncio é obrigatório" },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();
    let visitorId = cookieStore.get("visitor_id")?.value;

    if (!visitorId) {
      visitorId = uuidv4();
      cookieStore.set("visitor_id", visitorId, {
        maxAge: 60 * 60 * 24,
        path: "/",
        httpOnly: true,
        sameSite: "strict",
      });
    }

    const advert = await prisma.adverts.findUnique({
      where: { id: data.id },
    });

    if (!advert) {
      return NextResponse.json(
        { error: "Anúncio não encontrado" },
        { status: 404 }
      );
    }

    const existingView = await prisma.visit.findFirst({
      where: {
        advert_id: data.id,
        visitor_id: visitorId,
      },
    });

    if (existingView) {
      return NextResponse.json({
        success: true,
        newView: false,
        message: "Visualização já registrada para este visitante",
      });
    }

    await prisma.$transaction([
      prisma.visit.create({
        data: {
          advert_id: data.id,
          visitor_id: visitorId,
        },
      }),
      prisma.adverts.update({
        where: { id: data.id },
        data: { view_count: { increment: 1 } },
      }),
    ]);

    return NextResponse.json({
      success: true,
      newView: true,
      message: "Visualização registrada com sucesso",
    });
  } catch (error) {
    console.error("Erro ao registrar visualização:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}
