"use client";
import { createContext, ReactNode } from "react";

export interface iUser {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  imagem: string | null;
  telefone: string | null;
  plano: "GRATIS" | "BASICO" | "PRO";
  inscricoes: Array<iSubscription>;
}

type iSubscription = {
  status: "active" | "paused" | "canceled" | "unpaid";
  ciclo: "month" | "year" | null;
  inscricao_id: string | null;
  periodo_final: string | Date | undefined;
  cancelar_ao_final_do_periodo: boolean;
};

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
