import { JwtPayload, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";

async function getAccessToken(): Promise<string | null> {
  const accessToken = await cookies();
  return accessToken.get("accessToken")?.value || null;
}

export async function verifyJwt(): Promise<string | null> {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    console.warn("Token de acesso não encontrado.");
    return null;
  }

  try {
    const { sub: userId } = verify(
      accessToken,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    if (!userId) {
      console.warn("Token inválido: userId não encontrado.");
      return null;
    }

    return userId;
  } catch (error) {
    console.error("Erro ao verificar o token JWT:", error);
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const userId = await verifyJwt();
  return !!userId;
}

export async function auth(): Promise<null | Prisma.UserGetPayload<{
  include: { subscriptions: true };
}>> {
  const userId = await verifyJwt();

  if (!userId) {
    console.warn("Usuário não autenticado.");
    return null;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscriptions: true,
      },
    });

    if (!user) {
      console.warn("Usuário não encontrado no banco de dados.");
      return null;
    }

    return user;
  } catch (error) {
    console.error("Erro ao buscar o usuário no banco de dados:", error);
    return null;
  }
}
