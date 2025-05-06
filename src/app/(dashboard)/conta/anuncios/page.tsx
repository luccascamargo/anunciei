"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { apiClient, cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { LoadingModal } from "@/components/loadingModal";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const getActiveAds = useQuery({
    queryKey: ["active", user?.id],
    queryFn: async () => {
      const { data } = await apiClient.get(`/adverts/filterbyactives`);
      return data;
    },
  });

  const getInactiveAds = useQuery({
    queryKey: ["inactive", user?.id],
    queryFn: async () => {
      const { data } = await apiClient.get(`/adverts/filterbyinactives`);
      return data;
    },
  });

  const getRequestedAds = useQuery({
    queryKey: ["requested", user?.id],
    queryFn: async () => {
      const { data } = await apiClient(`/adverts/filterbypending`);
      return data;
    },
  });

  const deleteAd = useMutation({
    mutationKey: ["deleteAd", user?.id],
    mutationFn: async (id: string) => {
      const res = await apiClient.delete(`/adverts/remove/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res;
    },
    onSuccess: () => {
      toast("Anúncio deletado com sucesso!");
      getInactiveAds.refetch();
      getActiveAds.refetch();
      getRequestedAds.refetch();
    },
    onError: (err) => {
      console.log(err);
      toast("Falha ao deletar este anúncio");
    },
  });

  const handleInactiveAdvert = useMutation({
    mutationKey: ["inactiveAdvert", user?.id],
    mutationFn: async (id: string) => {
      const res = await apiClient.patch(`/adverts/desactive/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res;
    },
    onSuccess: () => {
      toast("Anúncio desativado com sucesso!");
      getInactiveAds.refetch();
      getActiveAds.refetch();
      getRequestedAds.refetch();
    },
    onError: (err) => {
      console.log(err);
      toast("Falha ao desativar este anúncio");
    },
  });

  const handleActiveAdvert = useMutation({
    mutationKey: ["activeAdvert", user?.id],
    mutationFn: async (id: string) => {
      const res = await apiClient.patch(`/adverts/active/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res;
    },
    onSuccess: () => {
      toast("Anúncio ativado com sucesso!");
      getInactiveAds.refetch();
      getActiveAds.refetch();
      getRequestedAds.refetch();
    },
    onError: (err) => {
      console.log(err);
      toast("Falha ao ativar este anúncio");
    },
  });

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
          <CardContent>
            <Tabs
              defaultValue={type || "active"}
              className="flex flex-col items-center mt-10"
            >
              <TabsList className="mb-10">
                <TabsTrigger value="active">
                  <Link href={"?type=active"}>Ativos</Link>
                </TabsTrigger>
                <TabsTrigger value="inactive">
                  <Link href={"?type=inactive"}>Inativos</Link>
                </TabsTrigger>
                <TabsTrigger value="requested">
                  <Link href={"?type=requested"}>Em aprovação</Link>
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="active"
                className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4"
              >
                {getActiveAds.status === "pending" && (
                  <Skeleton className="flex items-center p-5 gap-6" />
                )}
                {getActiveAds.data &&
                  getActiveAds.data.length > 0 &&
                  getActiveAds.data.map(
                    (
                      ad: Prisma.AdvertsGetPayload<{
                        include: { images: true; brand: true; model: true };
                      }>
                    ) => (
                      <div
                        key={ad.id}
                        className={cn(
                          "rounded-md border pb-5 h-fit transition-all hover:shadow-md relative"
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
                          <div className="w-full flex items-center justify-between">
                            <span className="text-muted-foreground text-lg font-bold">
                              {Number(ad.price).toLocaleString("pt-BR", {
                                currency: "BRL",
                                style: "currency",
                              })}
                            </span>
                            <DropdownMenu>
                              <DropdownMenuTrigger className="cursor-pointer">
                                <EllipsisVerticalIcon
                                  size={20}
                                  className="text-muted-foreground"
                                />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem
                                  asChild
                                  className="cursor-pointer"
                                >
                                  <Link href={`/anuncio/${ad.slug}`}>Ver</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="cursor-pointer"
                                  asChild
                                >
                                  <Link href={`/anuncio/editar/${ad.id}`}>
                                    Editar
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="cursor-pointer"
                                  variant="destructive"
                                  onClick={() =>
                                    handleInactiveAdvert.mutate(ad.id)
                                  }
                                >
                                  Desativar
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
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
                          <Separator className="w-full" />
                          <span className="text-muted-foreground font-semibold text-xs w-full text-center">
                            {ad.city} - {ad.state}
                          </span>
                        </div>
                        {user?.plan !== "FREE" && (
                          <div className="absolute bottom-2 right-2 flex items-center gap-1 text-muted-foreground">
                            <Users size={16} />
                            <span className="text-sm">{ad.view_count}</span>
                          </div>
                        )}
                      </div>
                    )
                  )}
                {getActiveAds.data && getActiveAds.data.length === 0 && (
                  <span className="text-sm text-muted-foreground">
                    Nenhum anúncio encontrado
                  </span>
                )}
              </TabsContent>
              <TabsContent
                value="inactive"
                className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4"
              >
                {getInactiveAds.status === "pending" && (
                  <Skeleton className="w-full h-[200px] flex items-center p-5 gap-6" />
                )}
                {getInactiveAds.data &&
                  getInactiveAds.data.length > 0 &&
                  getInactiveAds.data.map(
                    (
                      ad: Prisma.AdvertsGetPayload<{
                        include: { images: true; brand: true; model: true };
                      }>
                    ) => (
                      <div
                        key={ad.id}
                        className={cn(
                          "rounded-md border pb-5 h-fit transition-all opacity-70 hover:shadow-md hover:opacity-100 relative"
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
                          <div className="w-full flex items-center justify-between">
                            <span className="text-muted-foreground text-lg font-bold">
                              {Number(ad.price).toLocaleString("pt-BR", {
                                currency: "BRL",
                                style: "currency",
                              })}
                            </span>
                            <DropdownMenu>
                              <DropdownMenuTrigger className="cursor-pointer">
                                <EllipsisVerticalIcon
                                  size={20}
                                  className="text-muted-foreground"
                                />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem
                                  className="cursor-pointer"
                                  asChild
                                >
                                  <Link href={`/anuncio/editar/${ad.id}`}>
                                    Editar
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="cursor-pointer"
                                  onClick={() =>
                                    handleActiveAdvert.mutate(ad.id)
                                  }
                                >
                                  Ativar
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
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
                        {user?.plan !== "FREE" && (
                          <div className="absolute bottom-2 right-2 flex items-center gap-1 text-muted-foreground">
                            <Users size={16} />
                            <span className="text-sm">{ad.view_count}</span>
                          </div>
                        )}
                      </div>
                    )
                  )}
                {getInactiveAds.data && getInactiveAds.data.length === 0 && (
                  <span className="text-sm text-muted-foreground">
                    Nenhum anúncio encontrado
                  </span>
                )}
              </TabsContent>
              <TabsContent
                value="requested"
                className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4"
              >
                {getRequestedAds.status === "pending" && (
                  <Skeleton className="w-full h-[200px] flex items-center p-5 gap-6" />
                )}
                {getRequestedAds.data &&
                  getRequestedAds.data.length > 0 &&
                  getRequestedAds.data.map(
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
                {getRequestedAds.data && getRequestedAds.data.length === 0 && (
                  <span className="text-sm text-muted-foreground">
                    Nenhum anúncio encontrado
                  </span>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <LoadingModal
        isOpen={handleActiveAdvert.isPending}
        description="Aguarde um momento enquanto ativamos seu anúncio."
        title="Aguarde, isso pode levar alguns segundos..."
        subTitle="Ativando anúncio..."
      />

      <LoadingModal
        isOpen={handleInactiveAdvert.isPending}
        description="Aguarde um momento enquanto desativamos seu anúncio."
        title="Aguarde, isso pode levar alguns segundos..."
        subTitle="Aguarde um momento enquanto desativamos seu anúncio."
      />

      <LoadingModal
        isOpen={deleteAd.isPending}
        description="Aguarde um momento enquanto deletamos seu anúncio."
        title="Aguarde, isso pode levar alguns segundos..."
        subTitle="Aguarde um momento enquanto deletamos seu anúncio."
      />
    </>
  );
}
