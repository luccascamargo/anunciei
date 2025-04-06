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
import { Advert, Opcionai } from "@/types/FilterAdverts";
import { CarouselImages } from "@/components/carouselImages";
import { ComponentFavorite } from "./componentFavorite";

interface iContentAD {
  advert: Advert;
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
      <div className="container mx-auto pt-10 pb-20">
        <div className="flex items-end justify-between pt-10">
          <div className="flex flex-col gap-4">
            <span className="text-primary text-opacity-65 text-5xl font-bold uppercase">
              {advert.marca.nome} {advert.ano_modelo}
            </span>
            <p className="text-muted-foreground text-opacity-65 text-2xl font-medium max-w-[576px] uppercase">
              {advert.modelo.nome}
            </p>
          </div>
        </div>
        <div className="mt-9 w-full flex items-start gap-8 justify-between">
          <div className="w-full border rounded-xl shadow-sm pb-12">
            <CarouselImages images={advert.imagens} />

            <div className="w-full flex justify-between p-6 border-t mt-10">
              <div className="flex flex-col gap-3">
                <span className="text-base font-semibold">Localização</span>
                <p className="text-muted-foreground text-base font-medium text-opacity-65">
                  {advert.cidade} - {advert.estado}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-base font-semibold">Cor</span>
                <p className="text-muted-foreground text-base font-medium text-opacity-65">
                  {advert.cor}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className=" text-base font-semibold">Quilometragem</span>
                <p className="text-muted-foreground text-base font-medium text-opacity-65">
                  {Number(advert.quilometragem).toLocaleString("pt-BR")} km
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className=" text-base font-semibold">Portas</span>
                <p className="text-muted-foreground text-base font-medium text-opacity-65">
                  {advert.portas}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className=" text-base font-semibold">Cambio</span>
                <p className="text-muted-foreground text-base font-medium text-opacity-65">
                  {advert.cambio}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-10 border-t pt-10 pl-6">
              <span className=" text-3xl font-bold">Sobre este anúncio</span>
              <p className="text-muted-foreground text-base leading-7">
                {advert.descricao}
              </p>
            </div>
            <div className="bg-secondary mt-10 p-6 flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <span className=" font-medium">Anúncio criado por:</span>
                <div className="flex items-center gap-5">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={advert.usuario.imagem!}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-secondary-foreground text-secondary">
                      CN
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="">{`${
                      advert.usuario.nome + " " + advert.usuario.sobrenome
                    }`}</span>
                    <span className="">{advert.usuario.email}</span>
                  </div>
                </div>
              </div>
              <Link href={`/ad/user/${advert.usuario.id}`}>
                <Button variant={"default"}>Ver anúncios deste criador</Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-col gap-6 pl-6">
              <span className="font-bold text-3xl">Lista de opcionais</span>
              <ul className="flex flex-col gap-2 h-auto max-w-[500px] flex-wrap ">
                {advert.opcionais.length === 0 && (
                  <span className="text-muted-foreground">
                    Nenhum opcional cadastrado
                  </span>
                )}
                {advert.opcionais?.map((opt: Opcionai, index: number) => (
                  <li key={index}>{opt.nome}</li>
                ))}
              </ul>
            </div>
          </div>
          <Card className="min-w-96 h-auto sticky top-5">
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <CardTitle className="text-lg font-bold">
                Detalhes do Anúncio
              </CardTitle>
              <div className="flex items-center gap-4">
                <Button variant={"secondary"}>Compartilhar</Button>
                <ComponentFavorite
                  id={advert.id}
                  ano={advert.ano_modelo}
                  cidade={advert.cidade}
                  imagemUrl={advert.imagens[0].url}
                  marca={advert.marca.nome}
                  modelo={advert.modelo.nome}
                  preco={advert.preco}
                  quilometragem={advert.quilometragem}
                  cor={advert.cor}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-primary text-xl font-semibold">
                    Valor:
                  </span>
                  <span className="text-primary text-4xl font-bold">
                    {Number(advert.preco).toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </span>
                </div>
                {advert.usuario.telefone && (
                  <a
                    href={`https://wa.me/${advert.usuario.telefone.replace(
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
            </CardContent>
            <CardFooter className="flex flex-col items-center p-4">
              <span className="text-sm text-muted-foreground text-center">
                Anúncio publicado em {FormatDate(advert.data_cricao)}
              </span>
            </CardFooter>
          </Card>
        </div>
      </div>
      {/* <div className="w-screen border-t mt-10 pt-10">
        <Wrapper className="flex flex-col gap-6">
          <span className="font-bold text-primary text-3xl">
            Anúncios na região
          </span>
          <SimilarAdsSlide data={similarRegionAds.data} />
        </Wrapper>
      </div> */}
    </>
  );
}
