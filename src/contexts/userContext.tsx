"use client";
import { createContext, ReactNode } from "react";

export interface iUser {
  nome: string;
  sobrenome: string;
  email: string;
  imagem: string | null;
  telefone: string | null;
  plano: "GRATIS" | "BASICO" | "PRO";
}

interface iAuthContext {
  user: iUser | null;
}

export const AuthContext = createContext({} as iAuthContext);

export function AuthProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: iUser | null;
}) {
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
