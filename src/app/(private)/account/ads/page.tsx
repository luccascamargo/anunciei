"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Advert, Usuario } from "@/types/FilterAdverts";
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

export default function Page() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const getActiveAds = useQuery<Usuario>({
    queryKey: ["active", user?.id],
    queryFn: async () => {
      const { data } = await apiClient.get(
        `/adverts/advertsWithId/${user?.id}/?status=ativo`
      );
      return data;
    },
  });

  const getInactiveAds = useQuery<Usuario>({
    queryKey: ["inactive", user?.id],
    queryFn: async () => {
      const { data } = await apiClient.get(
        `/adverts/advertsWithId/${user?.id}/?status=inativo`
      );
      return data;
    },
  });

  const getRequestedAds = useQuery<Usuario>({
    queryKey: ["requested", user?.id],
    queryFn: async () => {
      const { data } = await apiClient(
        `/adverts/advertsWithId/${user?.id}/?status=pendente`
      );
      return data;
    },
  });

  const deleteAd = useMutation({
    mutationKey: ["deleteAd", user?.id],
    mutationFn: async (id: string) => {
      const res = await apiClient.delete(`/adverts/${id}`, {
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
      const res = await apiClient.patch(`/adverts/inactive/${id}`, {
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
      <div className="container m-auto flex items-center justify-center">
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
                  <Link href={"?type=inactivo"}>Inativos</Link>
                </TabsTrigger>
                <TabsTrigger value="requested">
                  <Link href={"?type=requested"}>Em aprovação</Link>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="flex flex-col space-y-5">
                {getActiveAds.data &&
                getActiveAds.data.anuncios &&
                getActiveAds.data.anuncios.length > 0 ? (
                  getActiveAds.data.anuncios.map((ad: Advert) => (
                    <Card
                      key={ad.id}
                      className={cn(
                        "w-[900px] h-[200px] flex items-center p-5 gap-6"
                      )}
                    >
                      <div className="relative w-[150px] h-[150px]">
                        <Image
                          src={ad.imagens[0].url || "/default-car.png"}
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
                                {ad.marca.nome}
                              </span>
                              <span className="text-2xl font-bold text-primary">
                                {ad.ano_modelo}
                              </span>
                            </div>
                            <p className="text-base max-w-[350px]">
                              {ad.modelo.nome}
                            </p>
                          </div>
                          <span className="text-xl text-primary font-medium">
                            {Number(ad.preco).toLocaleString("pt-BR", {
                              currency: "BRL",
                              style: "currency",
                            })}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-x-4">
                            <Button variant={"ghost"}>
                              <Link href={`/ad/${ad.id}`} className="text-sm ">
                                Ver
                              </Link>
                            </Button>
                            <Button variant={"ghost"}>
                              <Link
                                href={`/advert/update/${ad.id}`}
                                className="text-sm"
                              >
                                Editar
                              </Link>
                            </Button>

                            <Button
                              variant={"ghost"}
                              onClick={() => handleInactiveAdvert.mutate(ad.id)}
                            >
                              Desativar
                            </Button>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-sm">
                              {Number(ad.quilometragem).toLocaleString("pt-BR")}{" "}
                              km
                            </span>
                            <span className="text-sm">{ad.cor}</span>
                            <span className="text-sm">{ad.cidade}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <span className="text-sm">Nenhum anúncio encontrado</span>
                )}
              </TabsContent>
              <TabsContent
                value="inactive"
                className="flex flex-col gap-8 mt-0"
              >
                {getInactiveAds.data &&
                getInactiveAds.data.anuncios &&
                getInactiveAds.data.anuncios.length > 0 ? (
                  getInactiveAds.data.anuncios.map((ad: Advert) => (
                    <Card
                      key={ad.id}
                      className={cn(
                        "w-[900px] h-[200px] flex items-center p-5 gap-6 opacity-50 hover:opacity-100 transition-opacity duration-300"
                      )}
                    >
                      <div className="relative w-[150px] h-[150px]">
                        <Image
                          src={ad.imagens[0].url || "/default-car.png"}
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
                                {ad.marca.nome}
                              </span>
                              <span className="text-2xl font-bold text-primary">
                                {ad.ano_modelo}
                              </span>
                            </div>
                            <p className="text-base max-w-[350px]">
                              {ad.modelo.nome}
                            </p>
                          </div>
                          <span className="text-xl text-primary font-medium">
                            {Number(ad.preco).toLocaleString("pt-BR", {
                              currency: "BRL",
                              style: "currency",
                            })}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <>
                              <Button
                                variant={"ghost"}
                                onClick={() => handleActiveAdvert.mutate(ad.id)}
                              >
                                Ativar anuncio
                              </Button>
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
                            </>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-sm">
                              {Number(ad.quilometragem).toLocaleString("pt-BR")}{" "}
                              km
                            </span>
                            <span className="text-sm">{ad.cor}</span>
                            <span className="text-sm">{ad.cidade}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <span className="text-sm">Nenhum anúncio encontrado</span>
                )}
              </TabsContent>
              <TabsContent
                value="requested"
                className="flex flex-col gap-8 mt-0"
              >
                {getRequestedAds.data &&
                getRequestedAds.data.anuncios &&
                getRequestedAds.data.anuncios.length > 0 ? (
                  getRequestedAds.data.anuncios.map((ad: Advert) => (
                    <Card
                      key={ad.id}
                      className={cn(
                        "w-[900px] h-[200px] flex items-center p-5 gap-6 opacity-50"
                      )}
                    >
                      <div className="relative w-[150px] h-[150px]">
                        <Image
                          src={ad.imagens[0].url || "/default-car.png"}
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
                                {ad.marca.nome}
                              </span>
                              <span className="text-2xl font-bold text-primary">
                                {ad.ano_modelo}
                              </span>
                            </div>
                            <p className="text-base max-w-[350px]">
                              {ad.modelo.nome}
                            </p>
                          </div>
                          <span className="text-xl text-primary font-medium">
                            {Number(ad.preco).toLocaleString("pt-BR", {
                              currency: "BRL",
                              style: "currency",
                            })}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-sm">
                              {Number(ad.quilometragem).toLocaleString("pt-BR")}{" "}
                              km
                            </span>
                            <span className="text-sm">{ad.cor}</span>
                            <span className="text-sm">{ad.cidade}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <span className="text-sm">Nenhum anúncio encontrado</span>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
