import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const user = await auth();
    const searchParams = req.nextUrl.searchParams;
    const plan = searchParams.get("plan");
    const cycle = searchParams.get("cycle");

    if (!cycle || !plan) {
      return new NextResponse("Parametros inválidos", { status: 400 });
    }

    if (!user) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Mapear planos para preços do Stripe
    const precoIds: Record<string, Record<string, string>> = {
      basic: {
        month: "price_1QcsHDA20bcBSMLHiaI67GY8",
        year: "price_1QcsFIA20bcBSMLHzZTwiadO",
      },
      pro: {
        month: "price_1QcsDlA20bcBSMLH6U1zAB0t",
        year: "price_1QcsDNA20bcBSMLHleAyKwOj",
      },
    };

    const precoId = precoIds[plan]?.[cycle];

    if (!precoId) {
      return new NextResponse("Plano ou ciclo inválido", { status: 400 });
    }

    // Obter ou criar cliente no Stripe
    let stripeCustomerId = user.stripe_id;

    if (!stripeCustomerId) {
      // Criar novo cliente no Stripe
      const customer = await stripe.customers.create({
        email: user.email || undefined,
        name: user.name || undefined,
        metadata: {
          user: user.id,
        },
      });

      stripeCustomerId = customer.id;

      await prisma.user.update({
        where: { id: user.id },
        data: { stripe_id: stripeCustomerId },
      });
    }

    // Criar sessão de checkout
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      line_items: [
        {
          price: precoId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_API_URL}/?succes=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/pricing`,
      subscription_data: {
        metadata: {
          user: user.id,
          plan,
          cycle,
        },
      },
    });

    if (!checkoutSession.url) {
      return new NextResponse("Erro ao criar sessão de checkout", {
        status: 500,
      });
    }
    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Erro ao criar checkout:", error);
    return new NextResponse("Erro ao processar a solicitação", { status: 500 });
  }
}
