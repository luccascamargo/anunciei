/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { apiClient } from "@/lib/utils";
import { AdvertClient } from "./advertClient";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  try {
    const { data: advert } = await apiClient.get(`/adverts/${slug}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!advert) {
      return {
        title: "Anúncio não encontrado",
        description: "O anúncio solicitado não foi encontrado.",
      };
    }

    return {
      title: `${advert.brand.name} - ${advert.model.name} - ${advert.city}, ${advert.state} | Anunciei`,
      description:
        advert.description || "Confira este anúncio incrível no Anunciei!",
      openGraph: {
        title: advert.model,
        description: advert.description,
        url: `${process.env.NEXT_PUBLIC_API_URL}/${slug}`,
        images:
          advert.images?.map((image: any) => ({
            url: image.url,
            alt: advert.model,
          })) || [],
      },
      twitter: {
        card: "summary_large_image",
        title: advert.model,
        description: advert.description,
        images: advert.images?.[0]?.url || "",
      },
    };
  } catch (error) {
    console.error("Erro ao gerar metadata:", error);
    return {
      title: "Erro ao carregar anúncio",
      description: "Ocorreu um erro ao carregar o anúncio solicitado.",
    };
  }
}

export default async function Anuncio({ params }: { params: Params }) {
  const { slug } = await params;

  const { data } = await apiClient.get(`/adverts/${slug}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!data) {
    return notFound();
  }

  return <AdvertClient advert={data} />;
}
