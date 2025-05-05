import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const VISITOR_COOKIE_NAME = "visitor_id";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const cookieStore = await cookies();

  const visitorId = cookieStore.get(VISITOR_COOKIE_NAME)?.value;

  if (!visitorId) {
    return Response.json({ error: "Cookie inválido" }, { status: 400 });
  }

  try {
    const leadExists = await prisma.contact.findFirst({
      where: {
        advert_id: id,
        visitor_id: visitorId,
      },
    });
    if (leadExists) {
      return Response.json(
        { error: "Você já gerou um lead para este anúncio" },
        { status: 200 }
      );
    }

    await prisma.$transaction([
      prisma.contact.create({
        data: {
          advert_id: id,
          visitor_id: visitorId,
        },
      }),
      prisma.adverts.update({
        where: { id },
        data: { contact_count: { increment: 1 } },
      }),
    ]);

    return Response.json(
      { message: "Contato criado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Erro ao gerar um lead:", error);
    return Response.json({ error }, { status: 500 });
  }
}
