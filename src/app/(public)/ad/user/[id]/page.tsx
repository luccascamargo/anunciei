import { notFound } from "next/navigation";
import { apiClient } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Advert } from "@/types/FilterAdverts";
import { CardSeller } from "./Card";

type Params = Promise<{ id: string }>;

type iUser = {
  id: string;
  anuncios: Advert[];
  nome: string;
  sobrenome: string;
  telefone: string | null;
  email: string;
  imagem: string | null;
  data_criacao: Date;
};

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const { data } = await apiClient.get(`/adverts/advertsWithId/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!data) {
    notFound();
  }

  const user: iUser = data;

  return (
    <div className="container mx-auto flex justify-between pt-10 gap-10 min-h-screen">
      <Card className="h-fit px-9">
        <CardHeader>
          <CardTitle>Anúncios deste vendedor</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {user.anuncios.map((advert) => (
            <CardSeller
              key={advert.id}
              id={advert.id}
              image={advert.imagens[0].url}
              brand={advert.marca.nome}
              year={advert.ano_modelo}
              model={advert.modelo.nome}
              price={advert.preco}
              city={advert.cidade}
              mileage={advert.quilometragem}
              color={advert.cor}
            />
          ))}
        </CardContent>
        <CardFooter className="flex justify-center">
          <CardDescription>
            {user.anuncios.length} Anúncio(s) publicado(s)
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="min-w-[350px] h-fit">
        <CardHeader>
          <CardTitle>Detalhes do vendedor</CardTitle>
        </CardHeader>
        <CardContent className="mt-10 flex flex-col gap-10">
          <div className="flex flex-col items-center gap-5">
            <Avatar className="w-20 h-20">
              <AvatarImage src={user.imagem!} className="object-cover" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
              <span className="text-xl">
                {user.nome} {user.sobrenome}
              </span>
              <span className="text-sm">{user.email}</span>
            </div>
          </div>
          {user.telefone && (
            <a href={`https://wa.me/${user.telefone.replace(/\D/g, "")}`}>
              <Button variant={"default"} className="w-full">
                Chamar no WhatsApp
              </Button>
            </a>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <CardDescription>
            No iSerra desde{" "}
            {new Date(user.data_criacao).toLocaleDateString("pt-Br", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
