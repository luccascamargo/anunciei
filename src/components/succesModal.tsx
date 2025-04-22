"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const SuccessModal: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verifica o parâmetro "success" na URL
    const success = searchParams.get("success");
    if (success === "true") {
      setIsOpen(true);
    }
  }, [searchParams]);

  const handleRefresh = () => {
    setIsOpen(false);
    // Remove o parâmetro "success" da URL
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.delete("success");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assinatura Concluída!</DialogTitle>
        </DialogHeader>
        <p>Parabéns! Sua assinatura foi concluída com sucesso.</p>
        <p>Você pode continuar aproveitando todos os benefícios agora.</p>
        <DialogFooter>
          <Button onClick={handleRefresh}>Atualizar Página</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
