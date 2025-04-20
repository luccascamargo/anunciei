"use client";
import { useEffect, useState } from "react";
import { HeartIcon } from "lucide-react";
import { toast } from "sonner";

export type iComponentFavorite = {
  id: string;
  marca: string;
  slug: string;
  modelo: string;
  ano: number;
  preco: number;
  quilometragem: number;
  cidade: string;
  imagemUrl: string;
  cor: string;
};

export function ComponentFavorite({
  id,
  marca,
  modelo,
  slug,
  ano,
  preco,
  quilometragem,
  cidade,
  cor,
  imagemUrl,
}: iComponentFavorite) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav: iComponentFavorite) => fav.id === id));
  }, [id]);

  function toggleFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    let updatedFavorites;
    if (favorites.some((fav: iComponentFavorite) => fav.id === id)) {
      updatedFavorites = favorites.filter(
        (fav: iComponentFavorite) => fav.id !== id
      );
    } else {
      const newFavorite = {
        id,
        slug,
        marca,
        modelo,
        ano,
        preco,
        quilometragem,
        cidade,
        imagemUrl,
        cor,
      };
      updatedFavorites = [...favorites, newFavorite];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
    toast("Anuncio favoritado com sucesso");
  }

  return (
    <HeartIcon
      className={`cursor-pointer ${
        isFavorite ? "fill-primary text-primary" : "text-primary"
      }`}
      onClick={toggleFavorite}
    />
  );
}
