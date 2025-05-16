"use client";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export function InactivesButtonRefresh() {
  const router = useRouter();
  return (
    <Button variant={"outline"} onClick={() => router.refresh()}>
      Atualizar
      <RefreshCcw />
    </Button>
  );
}
