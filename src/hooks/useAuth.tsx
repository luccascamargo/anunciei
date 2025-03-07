import { AuthContext } from "@/contexts/userContext";
import { useContext } from "react";

export function useAuth() {
  const userContext = useContext(AuthContext);

  if (!useContext) {
    throw new Error("Função não suportada.");
  }

  return userContext;
}
