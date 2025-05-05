import { AdvertContactTemplate } from "@/components/advertContactTemplate";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const VISITOR_COOKIE_NAME = "visitor_id";

const formSchema = z.object({
  values: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string(),
    message: z.string(),
  }),
  slug: z.string(),
  id: z.string(),
});

export async function POST(request: NextRequest) {
  const { data } = await request.json();
  const cookieStore = await cookies();
  const parsedData = formSchema.safeParse(data);

  const visitorId = cookieStore.get(VISITOR_COOKIE_NAME)?.value;

  if (!visitorId) {
    return Response.json({ error: "Cookie inválido" }, { status: 400 });
  }

  if (!parsedData.success) {
    return Response.json({ error: parsedData.error.format() }, { status: 400 });
  }

  const { values, slug, id } = parsedData.data;
  const { email } = values;

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Olá, tem alguém interessado em um anúncio seu!",
      react: await AdvertContactTemplate({
        name: values.name,
        email: values.email,
        message: values.message,
        phone: values.phone,
        slug,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    await prisma.$transaction([
      prisma.contact.create({
        data: {
          advert_id: id,
          visitor_id: visitorId,
        },
      }),
      prisma.adverts.update({
        where: { slug },
        data: { contact_count: { increment: 1 } },
      }),
    ]);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
