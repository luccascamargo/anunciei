"use client";

import { apiClient } from "@/lib/utils";
import { useEffect } from "react";

type VisitTrackerProps = {
  advertId: string;
};

export function HandleVisitTracker({ advertId }: VisitTrackerProps) {
  useEffect(() => {
    let isMounted = true;

    const registerVisit = async () => {
      try {
        if (!isMounted) return;

        await apiClient.post("/adverts/handlevisits", {
          data: { id: advertId },
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Erro ao registrar visita:", error);
      }
    };

    registerVisit();

    return () => {
      isMounted = false; // Evita chamadas desnecessárias ao desmontar
    };
  }, [advertId]);

  return null; // Não renderiza nada visivelmente
}
