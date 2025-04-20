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
import { CardSeller } from "./Card";
import { Prisma } from "@/generated/prisma";

type Params = Promise<{ id: string }>;

type iUser = {
  id: string;
  adverts: Prisma.AdvertsGetPayload<{
    include: { images: true; brand: true; model: true };
  }>[];
  name: string;
  lastname: string;
  phone: string | null;
  email: string;
  image: string | null;
  created_at: Date;
};

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const { data } = await apiClient.get(`/adverts/filterbyuserid/${id}`, {
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
          {user.adverts.map((advert) => (
            <CardSeller
              key={advert.id}
              id={advert.id}
              image={advert.images[0].url}
              brand={advert.brand?.name}
              year={advert.year_model}
              model={advert.model.name}
              price={advert.price}
              city={advert.city}
              mileage={advert.mileage}
              color={advert.color}
            />
          ))}
        </CardContent>
        <CardFooter className="flex justify-center">
          <CardDescription>
            {user.adverts.length} Anúncio(s) publicado(s)
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
              <AvatarImage src={user.image!} className="object-cover" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
              <span className="text-xl">
                {user.name} {user.lastname}
              </span>
              <span className="text-sm">{user.email}</span>
            </div>
          </div>
          {user.phone && (
            <a href={`https://wa.me/${user.phone.replace(/\D/g, "")}`}>
              <Button variant={"default"} className="w-full">
                Chamar no WhatsApp
              </Button>
            </a>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <CardDescription>
            No iSerra desde{" "}
            {new Date(user.created_at).toLocaleDateString("pt-Br", {
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
