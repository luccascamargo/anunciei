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

  if (!userAlreadyExists) {
    return new Response("Usuário não encontrado", {
      status: 404,
    });
  }

  if (userAlreadyExists.active === false) {
    return new Response("Usuário inativo", {
      status: 409,
    });
  }

  const comparePassword = await bcrypt.compare(
    parsed.data.data.password,
    userAlreadyExists.password
  );

  if (!comparePassword) {
    return new Response("E-mail ou senha incorreta", {
      status: 401,
    });
  }

  const payload = {
    sub: userAlreadyExists.id,
    role: userAlreadyExists.role,
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
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
