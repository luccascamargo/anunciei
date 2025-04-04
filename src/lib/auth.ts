import { JwtPayload, verify } from "jsonwebtoken";

import { cookies } from "next/headers";
import { apiClient } from "./utils";
import { iUser } from "@/contexts/userContext";

async function getAccessToken() {
  const accessToken = await cookies();
  return accessToken.get("accessToken")?.value;
}

async function verifyJwt(): Promise<null | string> {
  const accessToken = await getAccessToken();

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

export async function auth(): Promise<null | iUser> {
  const userId = await verifyJwt();

  if (!userId) {
    return null;
  }

  try {
    const { data } = await apiClient.get(`/auth/me/${userId}`);

    return data;
  } catch {
    return null;
  }
}
