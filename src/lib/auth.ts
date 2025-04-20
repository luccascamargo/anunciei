import { JwtPayload, verify } from "jsonwebtoken";

import { cookies } from "next/headers";
import { prisma } from "./prisma";
import { Prisma } from "@/generated/prisma";

async function getAccessToken() {
  const accessToken = await cookies();
  return accessToken.get("accessToken")?.value;
}

export async function verifyJwt(token?: string): Promise<null | string> {
  const accessToken = token || (await getAccessToken());

  if (!accessToken) {
    return null;
  }

  try {
    const { sub: userId } = verify(
      accessToken,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    if (!userId) {
      return null;
    }
    return userId;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return !!verifyJwt();
}

export async function auth(): Promise<null | Prisma.UserGetPayload<{
  include: { subscriptions: true };
}>> {
  const userId = await verifyJwt();

  if (!userId) {
    return null;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscriptions: true,
      },
    });

    return user;
  } catch {
    return null;
  }
}
