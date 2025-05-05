"use client";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export function ButtonWhatsapp({
  id,
  brand,
  model,
  phone,
}: {
  id: string;
  brand: string;
  model: string;
  phone: string;
}) {
  const handleWhatsapp = useMutation({
    mutationKey: ["whatsapp", id],
    mutationFn: async () =>
      await apiClient.post(`/adverts/contact/lead/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    onSuccess: () => {
      const message = `Olá, estou interessado no anúncio do ${brand} ${model}.`;
      const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
      console.log("WhatsApp opened successfully");
    },
    onError: (error) => {
      console.error("Erro ao abrir o WhatsApp:", error);
    },
  });
  return (
    <Button
      variant={"default"}
      className="w-full"
      onClick={() => handleWhatsapp.mutate()}
      disabled={handleWhatsapp.isPending}
    >
      {handleWhatsapp.isPending && <Loader2 />}
      Chamar no WhatsApp
    </Button>
  );
}
