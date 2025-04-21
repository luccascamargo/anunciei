import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AdvertFull } from "@/@types/FilterAdverts";

type CardAdClient = {
  advert: AdvertFull;
};

export function CardSeller({ ...props }: CardAdClient) {
  return (
    <Card
      key={props.advert.id}
      className={cn(
        "w-full h-fit md:h-[200px] flex flex-col  items-center p-5 gap-6 md:flex-row"
      )}
    >
      <div className="relative w-full md:w-[150px] h-[150px]">
        <Image
          src={props.advert.images[0].url || "/default-car.png"}
          fill
          alt="1"
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-full flex flex-col justify-between gap-6 h-full">
        <div className="flex justify-between items-start gap-4 flex-col md:gap-0 md:flex-row md:items-center h-full">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">
                {props.advert.brand?.name}
              </span>
              <span className="text-2xl font-bold text-primary">
                {props.advert.year_model}
              </span>
            </div>
            <p className="text-base max-w-[350px]">{props.advert.model.name}</p>
          </div>
          <span className="text-xl text-primary font-medium">
            {Number(props.advert.price).toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </span>
        </div>
        <div className="flex items-start flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between">
          <div className="space-x-8 flex items-center">
            <Link
              href={`/ad/${props.advert.slug}`}
              className="text-sm underline"
            >
              Visualizar
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm">
              {Number(props.advert.mileage).toLocaleString("pt-BR")} km
            </span>
            <span className="text-sm">{props.advert.color}</span>
            <span className="text-sm">{props.advert.city}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
