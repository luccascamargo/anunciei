/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const body = await request.text();

  if (!signature) {
    return NextResponse.json(
      { error: "Webhook signature missing" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret!);
  } catch (err) {
    console.log(`Verificação webhook signature falhou.`, err);
    return NextResponse.json(
      { error: "Verificação Webhook signature falhou" },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "customer.subscription.created": {
        const subscription = event.data.object as any;

        const user = await prisma.user.findFirst({
          where: {
            stripe_id: subscription.customer as string,
          },
        });

        if (!user) {
          return NextResponse.json(
            { error: "Usuário não encontrado" },
            { status: 400 }
          );
        }

        await prisma.subscription.create({
          data: {
            cancel_at_period_end: subscription.cancel_at_period_end,
            current_period_end: new Date(
              subscription.current_period_end * 1000
            ).toISOString(),
            current_period_start: new Date(
              subscription.current_period_start * 1000
            ).toISOString(),
            status: subscription.status,
            cycle:
              subscription.items.data[0].price.recurring?.interval || "month",
            updated_at: new Date(),
            created_ad: new Date(),
            stripe_product_id: subscription.items.data[0].price.id,
            subscripton_id: subscription.id,
            user_id: user.id,
          },
        });
        const planId = subscription.items.data[0].price.id;

        if (subscription.status === "active") {
          if (
            planId === "price_1QcsHDA20bcBSMLHiaI67GY8" ||
            planId === "price_1QcsFIA20bcBSMLHzZTwiadO"
          ) {
            await prisma.user.update({
              where: {
                id: user.id,
              },
              data: {
                plan: "BASIC",
              },
            });
          } else if (
            planId === "price_1QcsDlA20bcBSMLH6U1zAB0t" ||
            planId === "price_1QcsDNA20bcBSMLHleAyKwOj"
          ) {
            await prisma.user.update({
              where: {
                id: user.id,
              },
              data: {
                plan: "PRO",
              },
            });
          }
        }
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        const user = await prisma.user.findFirst({
          where: {
            stripe_id: subscription.customer as string,
          },
        });

        if (!user) {
          return NextResponse.json(
            { error: "Usuário não encontrado" },
            { status: 400 }
          );
        }

        await prisma.subscription.update({
          where: {
            subscripton_id: subscription.id,
          },
          data: {
            status: subscription.status,
            updated_at: new Date(),
          },
        });

        await prisma.adverts.updateMany({
          where: {
            user_id: user.id,
          },
          data: {
            status: "INACTIVE",
          },
        });
        break;
      }
      case "customer.subscription.paused": {
        const subscription = event.data.object as Stripe.Subscription;

        const user = await prisma.user.findFirst({
          where: {
            stripe_id: subscription.customer as string,
          },
        });

        if (!user) {
          return NextResponse.json(
            { error: "Usuário não encontrado" },
            { status: 400 }
          );
        }

        await prisma.subscription.update({
          where: {
            subscripton_id: subscription.id,
          },
          data: {
            status: "paused",
            updated_at: new Date(),
          },
        });

        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            plan: "FREE",
          },
        });
        break;
      }
      case "customer.subscription.updated": {
        const subscription = event.data.object as any;

        const user = await prisma.user.findFirst({
          where: {
            stripe_id: subscription.customer as string,
          },
        });

        if (!user) {
          return NextResponse.json(
            { error: "Usuário não encontrado" },
            { status: 400 }
          );
        }

        await prisma.subscription.update({
          where: {
            subscripton_id: subscription.id,
          },
          data: {
            cycle:
              subscription.items.data[0].price.recurring?.interval || "month",
            cancel_at_period_end: subscription.cancel_at_period_end,
            status: subscription.status,
            current_period_start: new Date(
              subscription.current_period_start * 1000
            ),
            current_period_end: new Date(
              subscription.current_period_end * 1000
            ),
            stripe_product_id: subscription.items.data[0].price.id,
            updated_at: new Date(),
          },
        });

        const planId = subscription.items.data[0].price.id;
        if (
          planId === "price_1QcsHDA20bcBSMLHiaI67GY8" ||
          planId === "price_1QcsFIA20bcBSMLHzZTwiadO"
        ) {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              plan: "BASIC",
            },
          });
        } else if (
          planId === "price_1QcsDlA20bcBSMLH6U1zAB0t" ||
          planId === "price_1QcsDNA20bcBSMLHleAyKwOj"
        ) {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              plan: "PRO",
            },
          });
        }
        break;
      }
      default:
        console.log(`Tipo de evento desconhecido ${event.type}.`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Erro ao processar webhook:", error);
    return NextResponse.json(
      { error: "Erro ao processar webhook" },
      { status: 500 }
    );
  }
}
