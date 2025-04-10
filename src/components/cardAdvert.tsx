import { cn } from "@/lib/utils";
import { Advert } from "@/types/FilterAdverts";
import Image from "next/image";
import Link from "next/link";

interface iCardAd {
  className?: string;
  data: Advert;
}

export function CardAdvert({ className, data }: iCardAd) {
  return (
    <Link
      href={`/ad/${data.id}`}
      className={cn(
        className,
        "rounded-md border pb-5 h-fit min-w-60 transition-all hover:shadow-md"
      )}
    >
      <div className="w-full h-[125px] relative">
        <Image
          src={data.imagens[0].url || "/default-car.png"}
          fill
          quality={100}
          alt={data.modelo.nome}
          className="object-cover rounded-t"
        />
      </div>
      <div className="mt-3 px-3 w-full flex flex-col gap-5">
        <span className="text-muted-foreground text-lg font-bold">
          {Number(data.preco).toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </span>
        <div className="flex flex-col min-h-20">
          <span className="text-muted-foreground text-lg font-bold">
            {data.marca.nome}
          </span>
          <span className="text-muted-foreground font-normal text-xs uppercase">
            {data.modelo.nome}
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-muted-foreground font-semibold text-xs">
            {data.ano_modelo}
          </span>
          <span className="text-muted-foreground font-semibold text-xs">
            {Number(data.quilometragem).toLocaleString("pt-BR")} km
          </span>
          <span className="text-muted-foreground font-semibold text-xs">
            {data.cor}
          </span>
        </div>
        <div className="border w-full" />
        <span className="text-muted-foreground font-semibold text-xs w-full text-center">
          {data.cidade} - {data.estado}
        </span>
      </div>
    </Link>
  );
}
