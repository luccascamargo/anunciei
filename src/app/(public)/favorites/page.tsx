"use client";

import { useEffect, useState } from "react";
import { iComponentFavorite } from "../ad/[id]/componentFavorite";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardFavorites } from "@/components/cardfavorites";
import { toast } from "sonner";

export default function Page() {
  const [favorites, setIsFavorites] = useState<iComponentFavorite[]>([]);
  const [updatedFavorites, setUpdateFavorites] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorites(favorites);
  }, [updatedFavorites]);

  const toggleFavorite = (id: string) => {
    const newFavorites = favorites.filter((fav) => fav.id !== id);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setUpdateFavorites((old) => !old);
    toast("Anuncio removido com sucesso");
  };

  return (
    <div className="container mx-auto flex items-center justify-center pt-10">
      <Card className="min-h-[600px] w-full">
        <CardHeader>
          <CardTitle>Meus favoritos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-8 items-center">
          {favorites.length <= 0 || favorites === undefined ? (
            <span className="text-sm">
              Você não tem nenhum anúncio favoritado.
            </span>
          ) : (
            favorites.map((ad) => (
              <CardFavorites
                key={ad.id}
                brand={ad.marca}
                city={ad.cidade}
                color={ad.cor}
                id={ad.id}
                image={ad.imagemUrl}
                mileage={ad.quilometragem}
                model={ad.modelo}
                price={ad.preco}
                year={ad.ano}
                toggleFavorite={toggleFavorite}
              />
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
