"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Advert, Usuario } from "@/types/FilterAdverts";
import { api } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Footer } from "@/components/footer";
import { CardAdClient } from "@/components/cardAdClient";

export default function Page() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const type = searchParams.get("tipo");

  const getActiveAds = useQuery<Usuario>({
    queryKey: ["active"],
    queryFn: async () => {
      const res = await api(
        `/adverts/advertsWithId/${user?.id}/?status=ativo`,
        {
          method: "GET",
        }
      );
      return res;
    },
  });

  const getInactiveAds = useQuery<Usuario>({
    queryKey: ["inactive"],
    queryFn: async () => {
      const res = await api(
        `/adverts/advertsWithId/${user?.id}/?status=inativo`,
        {
          method: "GET",
        }
      );
      return res;
    },
  });

  const getRequestedAds = useQuery<Usuario>({
    queryKey: ["requested"],
    queryFn: async () => {
      const res = await api(
        `/adverts/advertsWithId/${user?.id}/?status=pendente`,
        {
          method: "GET",
        }
      );
      return res;
    },
  });

  return (
    <>
      <div className="container m-auto flex items-center justify-center">
        <Card className="mt-10 w-full">
          <CardHeader>
            <CardTitle>Meus anúncios</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue={
                type === "em aprovacao"
                  ? "requested"
                  : type === "inativos"
                  ? "inactive"
                  : "active"
              }
              className="flex flex-col items-center mt-10"
            >
              <TabsList className="mb-10">
                <TabsTrigger value="active">Ativos</TabsTrigger>
                <TabsTrigger value="inactive">Inativos</TabsTrigger>
                <TabsTrigger value="requested">Em aprovação</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="flex flex-col space-y-5">
                {getActiveAds.data &&
                getActiveAds.data.anuncios &&
                getActiveAds.data.anuncios.length > 0 ? (
                  getActiveAds.data.anuncios.map((ad: Advert) => (
                    <CardAdClient
                      id={ad.id}
                      key={ad.id}
                      year={ad.ano_modelo}
                      brand={ad.marca}
                      model={ad.modelo}
                      price={ad.preco}
                      city={ad.cidade}
                      color={ad.cor}
                      image={ad.imagens[0]}
                      mileage={ad.quilometragem}
                    />
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
                    <CardAdClient
                      id={ad.id}
                      key={ad.id}
                      year={ad.ano_modelo}
                      brand={ad.marca}
                      model={ad.modelo}
                      price={ad.preco}
                      city={ad.cidade}
                      color={ad.cor}
                      image={ad.imagens[0]}
                      mileage={ad.quilometragem}
                    />
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
                    <CardAdClient
                      id={ad.id}
                      key={ad.id}
                      year={ad.ano_modelo}
                      brand={ad.marca}
                      model={ad.modelo}
                      price={ad.preco}
                      city={ad.cidade}
                      color={ad.cor}
                      image={ad.imagens[0]}
                      mileage={ad.quilometragem}
                    />
                  ))
                ) : (
                  <span className="text-sm">Nenhum anúncio encontrado</span>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
