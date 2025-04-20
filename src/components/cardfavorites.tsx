"use client";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

type CardAdClient = {
  id: string;
  slug: string;
  image: string;
  brand: string;
  year: number;
  model: string;
  price: number;
  color: string;
  city: string;
  mileage: number;
  toggleFavorite: (id: string) => void;
};

export function CardFavorites({ toggleFavorite, ...props }: CardAdClient) {
  return (
    <Card className=" w-full max-w-4xl h-fit md:h-[200px] flex items-center p-5 gap-6">
      <div className="relative w-[150px] h-[150px]">
        <Image
          src={props.image || "/default-car.png"}
          fill
          alt="1"
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-full flex flex-col justify-between gap-6 h-full">
        <div className="flex flex-col gap-5 md:gap-0 justify-between items-start md:flex-row md:items-center h-full">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">
                {props.brand}
              </span>
              <span className="text-2xl font-bold text-primary">
                {props.year}
              </span>
            </div>
            <p className="text-base max-w-[350px]">{props.model}</p>
          </div>
          <span className="text-xl text-primary font-medium">
            {Number(props.price).toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </span>
        </div>

        <div className="flex flex-col items-start gap-5 md:gap-0 md:flex-row md:items-center justify-between">
          <div className="flex items-center gap-7">
            <Link href={`/ad/${props.slug}`} className="text-sm ">
              Ver
            </Link>
            <div
              className="text-red-800 text-sm cursor-pointer"
              onClick={() => toggleFavorite(props.id)}
            >
              Excluir
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm">
              {Number(props.mileage).toLocaleString("pt-BR")} km
            </span>
            <span className="text-sm">{props.color}</span>
            <span className="text-sm">{props.city}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
