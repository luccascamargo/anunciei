import { notFound } from "next/navigation";
import { Advert } from "@/types/FilterAdverts";
import { apiClient } from "@/lib/utils";
import { AdvertClient } from "./advertClient";

type Params = Promise<{ id: string }>;

export default async function Anuncio({ params }: { params: Params }) {
  let advert: Advert | null = null;
  const { id } = await params;

  try {
    const { data } = await apiClient.get(`/adverts/find/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!data) {
      notFound();
    }
    advert = data;
  } catch (error) {
    console.log("error", error);
    return notFound();
  }

  if (!advert) {
    return notFound();
  }

  return <AdvertClient advert={advert} />;
}
