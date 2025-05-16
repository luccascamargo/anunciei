import { notFound } from "next/navigation";
import { fetchApi } from "@/lib/utils";
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
import { Prisma } from "@prisma/client";

type Params = Promise<{ id: string }>;

type UserReturn = {
  adverts: Prisma.AdvertsGetPayload<{
    include: {
      brand: true;
      model: true;
      optionals: true;
      images: true;
      user: true;
    };
  }>[];
  email: string;
  created_at: Date;
  name: string;
  lastname: string;
  image: string;
  phone: string;
};
export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const data = await fetchApi<Promise<UserReturn>>(`/users/adverts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 flex flex-col items-center justify-between pt-10 gap-10 min-h-screen md:flex-row md:items-start">
      <Card className="w-full h-fit order-2">
        <CardHeader>
          <CardTitle>Anúncios deste vendedor</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {data.adverts.map((advert) => (
            <CardSeller advert={advert} key={advert.id} />
          ))}
        </CardContent>
        <CardFooter className="flex justify-center">
          <CardDescription>
            {data.adverts.length} Anúncio(s) publicado(s)
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="w-full md:w-[500px] h-fit">
        <CardHeader>
          <CardTitle>Detalhes do vendedor</CardTitle>
        </CardHeader>
        <CardContent className="mt-10 flex flex-col gap-10">
          <div className="flex flex-col items-center gap-5">
            <Avatar className="w-20 h-20">
              <AvatarImage src={data.image!} className="object-cover" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
              <span className="text-xl">
                {data.name} {data.lastname}
              </span>
              <span className="text-sm">{data.email}</span>
            </div>
          </div>
          {data.phone && (
            <a href={`https://wa.me/${data.phone.replace(/\D/g, "")}`}>
              <Button variant={"default"} className="w-full">
                Chamar no WhatsApp
              </Button>
            </a>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <CardDescription>
            No iSerra desde{" "}
            {new Date(data.created_at).toLocaleDateString("pt-Br", {
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
