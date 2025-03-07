"use server";

import { cookies } from "next/headers";

export async function SignOut() {
  const isCookies = await cookies();
  isCookies.delete("accessToken");
  isCookies.delete("refreshToken");
}
