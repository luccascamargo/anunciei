"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fetchApi } from "@/lib/utils";
import { EllipsisVerticalIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function DropdownActivesOptions({
  id,
  slug,
}: {
  id: string;
  slug: string;
}) {
  const router = useRouter();

  async function handleInactiveAdvert(id: string) {
    try {
      await fetchApi(`/adverts/desactive/${id}`, {
        method: "PATCH",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      toast("Falha ao desativar este anúncio");
    }
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <EllipsisVerticalIcon size={20} className="text-muted-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href={`/anuncio/${slug}`}>Ver</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href={`/anuncio/editar/${id}`}>Editar</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            variant="destructive"
            onClick={() => handleInactiveAdvert(id)}
          >
            Desativar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
