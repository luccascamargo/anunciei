import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const return_url = searchParams.get("returnUrl");
  try {
    const user = await auth();

    if (!user) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    if (!user.stripe_id) {
      return new NextResponse("Portal inacessível", { status: 40 });
    }

    const portal = await stripe.billingPortal.sessions.create({
      customer: user.stripe_id,
      return_url: return_url || `${request.headers.get("origin")}/account`,
    });

    if (!portal) {
      return new NextResponse("Falha ao buscar cliente", { status: 400 });
    }

    return NextResponse.json({ url: portal.url });
  } catch (error) {
    console.error("[STRIPE_PORTAL_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}
