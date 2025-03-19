import { notFound } from "next/navigation";
import { api } from "@/lib/utils";
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
import { CardAdClient } from "@/components/cardAdClient";
import { Advert } from "@/types/FilterAdverts";

type Params = Promise<{ id: string }>;

type iUser = {
  id: string;
  anuncios: Advert[];
  nome: string;
  sobrenome: string;
  telefone: string | null;
  email: string;
  image: string | null;
};

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const res = await api(`/adverts/advertsWithId/${id}`, {
    method: "GET",
    cache: "default",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.error) {
    notFound();
  }

  const user: iUser = res;

  return (
    <div className="container mx-auto flex justify-between pt-10 gap-10 min-h-screen">
      <Card className="h-fit px-9">
        <CardHeader>
          <CardTitle>Anúncios deste vendedor</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {user.anuncios.map((advert) => (
            <CardAdClient
              key={advert.id}
              id={advert.id}
              image={advert.imagens[0]}
              brand={advert.marca}
              year={advert.ano_modelo}
              model={advert.modelo}
              price={advert.preco}
              city={advert.cidade}
              mileage={advert.quilometragem}
              color={advert.cor}
              controls={false}
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
              <AvatarImage src={user.image!} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
              <span className="text-xl">{user.nome}</span>
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
          <CardDescription>No iSerra desde {}</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
