"use client";
import { Prisma } from "@/generated/prisma";
import { createContext, ReactNode } from "react";

interface iAuthContext {
  user: null | Prisma.UserGetPayload<{
    include: { subscriptions: true };
  }> | null;
}

export const AuthContext = createContext({} as iAuthContext);

export function AuthProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: null | Prisma.UserGetPayload<{
    include: { subscriptions: true };
  }> | null;
}) {
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
