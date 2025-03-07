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
      href={`/anuncio/${data.slug}`}
      className={cn(
        className,
        "rounded-md border pb-5 h-fit w-[250px] transition-all hover:shadow"
      )}
    >
      <div className="w-full h-[125px] relative">
        <Image
          src={"/default-car.png"}
          fill
          alt={data.modelo}
          className="object-cover rounded-t"
        />
      </div>
      <div className="mt-3 px-3 w-full flex flex-col gap-5">
        <span className="text-primary text-lg font-bold">
          {Number(data.preco).toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </span>
        <div className="flex flex-col min-h-24">
          <span className="text-primary text-lg font-bold">{data.marca}</span>
          <span className="text-primary font-normal text-xs uppercase">
            {data.modelo}
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-primary font-semibold text-xs">
            {data.ano_modelo}
          </span>
          <span className="text-primary font-semibold text-xs">
            {Number(data.quilometragem).toLocaleString("pt-BR")} km
          </span>
          <span className="text-primary font-semibold text-xs">{data.cor}</span>
        </div>
        <div className="border w-full" />
        <span className="text-primary font-semibold text-xs w-full text-center">
          {data.cidade}
        </span>
      </div>
    </Link>
  );
}
