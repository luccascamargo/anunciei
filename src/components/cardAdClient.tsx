"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { api } from "@/lib/utils";
import { Imagen } from "@/types/FilterAdverts";

type CardAdClient = {
  id: string;
  image: Imagen;
  brand: string;
  year: number;
  model: string;
  price: number;
  color: string;
  city: string;
  mileage: number;
  controls: boolean;
};

export function CardAdClient({ controls = true, ...props }: CardAdClient) {
  const deleteAd = useMutation({
    mutationKey: ["deleteAd"],
    mutationFn: (id: string) => {
      const res = api(`/delete-advert/${id}`, { method: "DELETE" });
      return res;
    },
    onSuccess: () => {
      toast("Anúncio deletado com sucesso!");
    },
    onError: (err) => {
      console.log(err);
      toast("Falha ao deletar este anúncio");
    },
  });

  return (
    <Card className="w-[900px] h-[200px] flex items-center p-5 gap-6">
      <div className="relative w-[150px] h-[150px]">
        <Image
          src={props.image.url || "/default-car.png"}
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
          {controls && (
            <div className="flex items-center gap-4">
              <>
                <Button variant={"link"}>
                  <Link href={`/ad/${props.id}`} className="text-sm ">
                    Ver
                  </Link>
                </Button>
                <Button variant={"link"}>
                  <Link href={`/editar/`} className="text-sm">
                    Editar
                  </Link>
                </Button>
              </>
              <Button
                variant={"link"}
                className="text-red-800"
                onClick={() => deleteAd.mutate("")}
              >
                Excluir
              </Button>
            </div>
          )}

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
