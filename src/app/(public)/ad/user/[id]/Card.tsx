import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CardAdClient = {
  id: string;
  image: string;
  brand: string;
  year: number;
  model: string;
  price: number;
  color: string;
  city: string;
  mileage: number;
};

export function CardSeller({ ...props }: CardAdClient) {
  return (
    <Card className={cn("w-[900px] h-[200px] flex items-center p-5 gap-6")}>
      <div className="relative w-[150px] h-[150px]">
        <Image
          src={props.image || "/default-car.png"}
          fill
          alt="1"
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-full flex flex-col justify-between gap-6 h-full">
        <div className="flex justify-between items-center h-full">
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

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant={"link"}>
              <Link href={`/ad/${props.id}`} className="text-sm ">
                Ver anúncio
              </Link>
            </Button>
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
