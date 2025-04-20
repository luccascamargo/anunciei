import { notFound } from "next/navigation";
import { AdvertFull } from "@/@types/FilterAdverts";
import { apiClient } from "@/lib/utils";
import { AdvertClient } from "./advertClient";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  try {
    const { data: advert } = await apiClient.get<AdvertFull>(
      `/adverts/${slug}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!advert) {
      return {
        title: "Anúncio não encontrado",
        description: "O anúncio solicitado não foi encontrado.",
      };
    }

    return {
      title: `${advert.brand.name} - ${advert.model.name} - ${advert.city}, ${advert.state} | AppGarage`,
      description:
        advert.description || "Confira este anúncio incrível no AppGarage!",
      openGraph: {
        title: advert.model,
        description: advert.description,
        url: `https://www.igarage.com/ad/${slug}`,
        images:
          advert.images?.map((image) => ({
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
  let advert: AdvertFull | null = null;
  const { slug } = await params;

  try {
    const { data } = await apiClient.get(`/adverts/${slug}`, {
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
