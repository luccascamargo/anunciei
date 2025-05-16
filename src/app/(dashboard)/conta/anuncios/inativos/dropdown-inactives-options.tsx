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

export function DropdownInactivesOptions({
  id,
  slug,
}: {
  id: string;
  slug: string;
}) {
  const router = useRouter();

  async function handleActiveAdvert(id: string) {
    try {
      await fetchApi(`/adverts/active/${id}`, {
        method: "PATCH",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      toast("Falha ao ativar este anúncio");
    }
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <EllipsisVerticalIcon size={20} className="text-muted-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href={`/anuncio/editar/${slug}`}>Editar</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => handleActiveAdvert(id)}
          >
            Ativar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
