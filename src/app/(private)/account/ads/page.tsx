"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { AdvertByStatus } from "@/@types/FilterAdverts";
import { apiClient, cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { LoadingModal } from "@/components/loadingModal";

export default function Page() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const getActiveAds = useQuery<AdvertByStatus[]>({
    queryKey: ["active", user?.id],
    queryFn: async () => {
      const { data } = await apiClient.get(`/adverts/filterbyactives`);
      return data;
    },
  });

  const getInactiveAds = useQuery<AdvertByStatus[]>({
    queryKey: ["inactive", user?.id],
    queryFn: async () => {
      const { data } = await apiClient.get(`/adverts/filterbyinactives`);
      return data;
    },
  });

  const getRequestedAds = useQuery<AdvertByStatus[]>({
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
      <div className="container m-auto px-5 flex items-center justify-center">
        <Card className="mt-10 w-full min-h-screen">
          <CardHeader>
            <CardTitle>Meus anúncios</CardTitle>
          </CardHeader>
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
                className="w-full max-w-4xl flex flex-col items-center space-y-5"
              >
                {getActiveAds.status === "pending" && (
                  <Skeleton className="w-full h-[200px] flex items-center p-5 gap-6" />
                )}
                {getActiveAds.data &&
                  getActiveAds.data.length > 0 &&
                  getActiveAds.data.map((ad) => (
                    <Card
                      key={ad.id}
                      className={cn(
                        "w-full h-fit md:h-[200px] flex items-center p-5 gap-6"
                      )}
                    >
                      <div className="relative w-[150px] h-[150px]">
                        <Image
                          src={ad.images[0].url || "/default-car.png"}
                          fill
                          alt="1"
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-between gap-6 h-full">
                        <div className="flex justify-between items-start gap-4 flex-col md:gap-0 md:flex-row md:items-center h-full">
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-primary">
                                {ad.brand?.name}
                              </span>
                              <span className="text-2xl font-bold text-primary">
                                {ad.year_model}
                              </span>
                            </div>
                            <p className="text-base max-w-[350px]">
                              {ad.model.name}
                            </p>
                          </div>
                          <span className="text-xl text-primary font-medium">
                            {Number(ad.price).toLocaleString("pt-BR", {
                              currency: "BRL",
                              style: "currency",
                            })}
                          </span>
                        </div>

                        <div className="flex items-start flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between">
                          <div className="space-x-8 flex items-center">
                            <Link href={`/ad/${ad.slug}`} className="text-sm ">
                              Ver
                            </Link>
                            <Link
                              href={`/advert/update/${ad.id}`}
                              className="text-sm"
                            >
                              Editar
                            </Link>

                            <div
                              className="text-sm cursor-pointer"
                              onClick={() => handleInactiveAdvert.mutate(ad.id)}
                            >
                              Desativar
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-sm">
                              {Number(ad.mileage).toLocaleString("pt-BR")} km
                            </span>
                            <span className="text-sm">{ad.color}</span>
                            <span className="text-sm">{ad.city}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                {getActiveAds.data && getActiveAds.data.length === 0 && (
                  <span className="text-sm text-muted-foreground">
                    Nenhum anúncio encontrado
                  </span>
                )}
              </TabsContent>
              <TabsContent
                value="inactive"
                className="w-full max-w-4xl flex flex-col items-center space-y-5"
              >
                {getInactiveAds.status === "pending" && (
                  <Skeleton className="w-full h-[200px] flex items-center p-5 gap-6" />
                )}
                {getInactiveAds.data &&
                  getInactiveAds.data.length > 0 &&
                  getInactiveAds.data.map((ad) => (
                    <Card
                      key={ad.id}
                      className={cn(
                        "w-full h-fit md:h-[200px] flex items-center p-5 gap-6 opacity-100 md:opacity-50 transition-all hover:opacity-100"
                      )}
                    >
                      <div className="relative w-[150px] h-[150px]">
                        <Image
                          src={ad.images[0].url || "/default-car.png"}
                          fill
                          alt="1"
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-between gap-6 h-full">
                        <div className="flex justify-between items-start gap-4 flex-col md:gap-0 md:flex-row md:items-center h-full">
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-primary">
                                {ad.brand?.name}
                              </span>
                              <span className="text-2xl font-bold text-primary">
                                {ad.year_model}
                              </span>
                            </div>
                            <p className="text-base max-w-[350px]">
                              {ad.model.name}
                            </p>
                          </div>
                          <span className="text-xl text-primary font-medium">
                            {Number(ad.price).toLocaleString("pt-BR", {
                              currency: "BRL",
                              style: "currency",
                            })}
                          </span>
                        </div>

                        <div className="flex items-start flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between">
                          <div className="space-x-8 flex items-center">
                            <Link
                              href={`/advert/update/${ad.id}`}
                              className="text-sm"
                            >
                              Editar
                            </Link>

                            <div
                              className="text-sm cursor-pointer"
                              onClick={() => handleActiveAdvert.mutate(ad.id)}
                            >
                              Ativar
                            </div>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className="text-red-500 hover:text-red-500"
                                >
                                  Excluir
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Você tem certeza que deseja deletar este
                                    anúncio?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Esta ação não pode ser desfeita. Você tem
                                    certeza que deseja continuar?
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>
                                    Cancelar
                                  </AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => deleteAd.mutate(ad.id)}
                                  >
                                    Excluir
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-sm">
                              {Number(ad.mileage).toLocaleString("pt-BR")} km
                            </span>
                            <span className="text-sm">{ad.color}</span>
                            <span className="text-sm">{ad.city}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                {getInactiveAds.data && getInactiveAds.data.length === 0 && (
                  <span className="text-sm text-muted-foreground">
                    Nenhum anúncio encontrado
                  </span>
                )}
              </TabsContent>
              <TabsContent
                value="requested"
                className="w-full max-w-4xl flex flex-col items-center space-y-5"
              >
                {getRequestedAds.status === "pending" && (
                  <Skeleton className="w-full h-[200px] flex items-center p-5 gap-6" />
                )}
                {getRequestedAds.data &&
                  getRequestedAds.data.length > 0 &&
                  getRequestedAds.data.map((ad) => (
                    <Card
                      key={ad.id}
                      className={cn(
                        "w-full h-fit md:h-[200px] flex items-center p-5 gap-6 opacity-50 "
                      )}
                    >
                      <div className="relative w-[150px] h-[150px]">
                        <Image
                          src={ad.images[0].url || "/default-car.png"}
                          fill
                          alt="1"
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-between gap-6 h-full">
                        <div className="flex justify-between items-start gap-4 flex-col md:gap-0 md:flex-row md:items-center h-full">
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-primary">
                                {ad.brand?.name}
                              </span>
                              <span className="text-2xl font-bold text-primary">
                                {ad.year_model}
                              </span>
                            </div>
                            <p className="text-base max-w-[350px]">
                              {ad.model.name}
                            </p>
                          </div>
                          <span className="text-xl text-primary font-medium">
                            {Number(ad.price).toLocaleString("pt-BR", {
                              currency: "BRL",
                              style: "currency",
                            })}
                          </span>
                        </div>

                        <div className="flex items-start flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-sm">
                              {Number(ad.mileage).toLocaleString("pt-BR")} km
                            </span>
                            <span className="text-sm">{ad.color}</span>
                            <span className="text-sm">{ad.city}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
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
