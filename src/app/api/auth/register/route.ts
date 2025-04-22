import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { z } from "zod";

const registerSchema = z.object({
  data: z.object({
    email: z.string().email("E-mail inválido"),
    password: z
      .string()
      .min(8, { message: "Senha deve ter pelo menos 8 caracteres." }),
    name: z
      .string()
      .min(3, { message: "Nome deve ter pelo menos 3 caracteres." }),
    lastname: z.string({ message: "Sobrenome é obrigatório." }).min(3, {
      message: "Sobrenome deve ter pelo menos 3 caracteres.",
    }),
  }),
});

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const res = await request.json();
  const parsed = registerSchema.safeParse(res);

  if (!parsed.success) {
    return new Response(JSON.stringify(parsed.error.format()), {
      status: 422,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      email: parsed.data.data.email,
    },
  });

  if (userAlreadyExists) {
    if (userAlreadyExists.active === false) {
      return new Response("Usuário inativo", {
        status: 409,
      });
    }
    return new Response("Usuário já existe", {
      status: 409,
    });
  }

  const passwordHash = await bcrypt.hash(parsed.data.data.password, 10);

  const user = await prisma.user.create({
    data: {
      active: true,
      email: parsed.data.data.email,
      name: parsed.data.data.name,
      lastname: parsed.data.data.lastname,
      password: passwordHash,
    },
  });

  const payload = {
    sub: user.id,
  };

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });

  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    path: "/",
  });

  return new Response(null, {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
