import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, fetchApi } from "@/lib/utils";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Badge } from "@/components/ui/badge";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { PendingsButtonRefresh } from "./pending-button-refresh";

export default async function Page() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken) {
    return notFound();
  }

  let requestedAdsData: Prisma.AdvertsGetPayload<{
    include: { images: true; brand: true; model: true };
  }>[] = [];

  try {
    requestedAdsData = await fetchApi<
      Promise<
        Prisma.AdvertsGetPayload<{
          include: { images: true; brand: true; model: true };
        }>[]
      >
    >("/adverts/filterbypending", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    });
  } catch (err) {
    console.error("Erro ao buscar anúncios pendentes:", err);
    return notFound(); // ou uma UI de fallback
  }

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">
                  <span className="text-muted-foreground">Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Meus anúncios</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="w-full h-full px-6 flex items-center justify-center">
        <Card className="mt-10 w-full h-full">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Anúncios pendentes</CardTitle>
            <PendingsButtonRefresh />
          </CardHeader>
          <CardContent className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
            {requestedAdsData.map(
              (
                ad: Prisma.AdvertsGetPayload<{
                  include: { images: true; brand: true; model: true };
                }>
              ) => (
                <div
                  key={ad.id}
                  className={cn(
                    "rounded-md border pb-5 h-fit transition-all opacity-70 hover:shadow-md"
                  )}
                >
                  <div className="w-full h-[125px] relative">
                    {ad.emphasis && (
                      <Badge className="absolute z-10 top-2 right-2">
                        Destaque
                      </Badge>
                    )}
                    <Image
                      src={ad.images[0].url || "/default-car.png"}
                      fill
                      quality={100}
                      alt={ad.model.name}
                      className="object-cover rounded-t"
                    />
                  </div>
                  <div className="mt-3 px-3 w-full flex flex-col gap-5">
                    <span className="text-muted-foreground text-lg font-bold">
                      {Number(ad.price).toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency",
                      })}
                    </span>
                    <div className="flex flex-col min-h-20">
                      <span className="text-muted-foreground text-lg font-bold">
                        {ad.brand.name}
                      </span>
                      <span className="text-muted-foreground font-normal text-xs uppercase">
                        {ad.model.name}
                      </span>
                    </div>
                    <div className="w-full flex items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs">
                        {ad.year_model}
                      </span>
                      <span className="text-muted-foreground font-semibold text-xs">
                        {Number(ad.mileage).toLocaleString("pt-BR")} km
                      </span>
                      <span className="text-muted-foreground font-semibold text-xs">
                        {ad.color}
                      </span>
                    </div>
                    <div className="border w-full" />
                    <span className="text-muted-foreground font-semibold text-xs w-full text-center">
                      {ad.city} - {ad.state}
                    </span>
                  </div>
                </div>
              )
            )}
            {requestedAdsData.length === 0 && (
              <span className="text-muted-foreground">
                Nenhuma anúncio encontrado
              </span>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
