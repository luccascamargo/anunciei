/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { CarouselImages } from "@/components/carouselImages";
import { ComponentFavorite } from "./componentFavorite";
import { FormAdvertContact } from "@/components/formAdvertContact";
import { Prisma } from "@prisma/client";

interface iContentAD {
  advert: Prisma.AdvertsGetPayload<{
    include: {
      brand: true;
      model: true;
      optionals: true;
      images: true;
      user: true;
    };
  }>;
}

export function AdvertClient({ advert }: iContentAD) {
  function FormatDate(value: string) {
    const date = new Date(value);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString("pt-BR", options);
  }
  return (
    <>
      <div className="container px-6 mx-auto pt-10 pb-20 relative">
        <div className="flex items-end justify-between pt-10">
          <div className="flex flex-col gap-4">
            <span className="text-primary text-opacity-65 text-3xl lg:text-5xl font-bold uppercase">
              {advert.brand?.name} {advert.year_model}
            </span>
            <p className="text-muted-foreground text-opacity-65 text-lg lg:text-3xl font-medium max-w-[576px] uppercase">
              {advert.model.name}
            </p>
          </div>
        </div>
        <div className="mt-9 w-full flex-col flex items-start gap-8 justify-between lg:flex-row">
          <div className="w-full border rounded-xl shadow-sm pb-12">
            <CarouselImages images={advert.images} />

            <div className="w-full flex justify-between flex-col p-6 border-t mt-10 gap-5 lg:flex-row">
              <div className="flex flex-col gap-3">
                <span className="text-base font-semibold">Localização</span>
                <p className="text-muted-foreground text-base font-medium text-opacity-65">
                  {advert.city}
                  <br />
                  {advert.state}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-base font-semibold">Cor</span>
                <p className="text-muted-foreground text-base font-medium text-opacity-65">
                  {advert.color}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className=" text-base font-semibold">Quilometragem</span>
                <p className="text-muted-foreground text-base font-medium text-opacity-65">
                  {Number(advert.mileage).toLocaleString("pt-BR")} km
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className=" text-base font-semibold">Portas</span>
                <p className="text-muted-foreground text-base font-medium text-opacity-65">
                  {advert.doors}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className=" text-base font-semibold">Cambio</span>
                <p className="text-muted-foreground text-base font-medium text-opacity-65">
                  {advert.transmission}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-10 border-t pt-10 pl-6">
              <span className="text-2xl lg:text-3xl font-bold">
                Sobre este anúncio
              </span>
              <p className="text-muted-foreground text-base leading-7">
                {advert.description}
              </p>
            </div>
            <div className="bg-secondary mt-10 p-6 flex justify-between flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-0">
              <div className="flex flex-col gap-4">
                <span className=" font-medium">Anúncio criado por:</span>
                <div className="flex items-center gap-5">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={advert.user.image!}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-secondary-foreground text-secondary">
                      CN
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="">{`${
                      advert.user.name + " " + advert.user.lastname
                    }`}</span>
                    <span className="">{advert.user.email}</span>
                  </div>
                </div>
              </div>
              <Link href={`/ad/user/${advert.user.id}`}>
                <Button variant={"default"}>Ver anúncios deste criador</Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-col gap-6 pl-6">
              <span className="font-bold text-2xl lg:text-3xl">
                Lista de opcionais
              </span>
              <ul className="flex flex-col gap-2 h-auto max-w-[500px] flex-wrap ">
                {advert.optionals.length === 0 && (
                  <span className="text-muted-foreground">
                    Nenhum opcional cadastrado
                  </span>
                )}
                {advert.optionals?.map((opt: any, index: number) => (
                  <li key={index}>{opt.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <Card className="w-full lg:max-w-md lg:min-w-md h-auto sticky top-5">
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <CardTitle className="text-lg font-bold">
                Detalhes do Anúncio
              </CardTitle>
              <div className="flex items-center gap-4">
                <Button variant={"secondary"}>Compartilhar</Button>
                <ComponentFavorite
                  slug={advert.slug}
                  id={advert.id}
                  ano={advert.year_model}
                  cidade={advert.city}
                  imagemUrl={advert.images[0].url}
                  marca={advert.brand?.name}
                  modelo={advert.model.name}
                  preco={advert.price}
                  quilometragem={advert.mileage}
                  cor={advert.color}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-semibold">Valor:</span>
                  <span className="text-primary text-4xl font-bold">
                    {Number(advert.price).toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </span>
                </div>
                {advert.user.phone && (
                  <a
                    href={`https://wa.me/${advert.user.phone.replace(
                      /\D/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant={"default"} className="w-full">
                      Chamar no WhatsApp
                    </Button>
                  </a>
                )}
              </div>

              <div className="mt-6">
                <span className="text-muted-foreground">
                  ou, envie uma mensagem ao vendedor
                </span>
                <FormAdvertContact slug={advert.slug} />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center p-4">
              <span className="text-sm text-muted-foreground text-center">
                Anúncio publicado em {FormatDate(advert.created_at.toString())}
              </span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
