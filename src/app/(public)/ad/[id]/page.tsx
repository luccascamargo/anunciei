import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Advert } from "@/types/FilterAdverts";
import { api } from "@/lib/utils";
import { AdvertClient } from "./advertClient";

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  let advert: Advert | null = null;
  const { id } = await params;

  try {
    const result = await api(`/adverts/find/${id}`, {
      method: "GET",
      cache: "default",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.error) {
      notFound();
    }
    advert = result;
  } catch (error) {
    console.log("error", error);
    notFound();
  }

  const createDescription = () => {
    let description = "";
    if (advert) {
      const fields = [
        advert.marca,
        advert.modelo,
        advert.ano_modelo.toString(),
        advert.cor,
        advert.cambio,
        advert.cidade,
        advert.estado,
        advert.descricao,
      ];

      for (const field of fields) {
        if (description === "") {
          description = field;
        }
        description = description + ` - ` + field;
      }
      return description;
    }
  };

  const createTitle = () => {
    let title = "";
    if (advert) {
      const fields = [
        advert.marca,
        advert.modelo,
        advert.ano_modelo.toString(),
        advert.cor,
        advert.cambio,
        advert.cidade,
        advert.estado,
        advert.descricao,
      ];

      for (const field of fields) {
        if (title === "") {
          title = field;
        }
        title = title + ` - ` + field;
      }
      return title;
    }
  };

  const createKeywords = () => {
    let Keywords = "";
    if (advert) {
      const fields = [
        advert.marca,
        advert.modelo,
        advert.ano_modelo.toString(),
        advert.cor,
        advert.cambio,
        advert.cidade,
        advert.estado,
        advert.descricao,
      ];

      for (const field of fields) {
        if (Keywords === "") {
          Keywords = field;
        }
        Keywords = Keywords + ` ` + field;
      }
      return Keywords;
    }
  };

  const previousImages = advert?.imagens || [];

  return {
    title: createTitle(),
    description: createDescription(),
    keywords: createKeywords(),
    openGraph: {
      images: previousImages.map((image) => image.url),
    },
  };
}

export default async function Anuncio({ params }: { params: Params }) {
  let advert: Advert | null = null;
  const { id } = await params;

  try {
    const result = await api(`/adverts/find/${id}`, {
      method: "GET",
      cache: "default",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.error) {
      notFound();
    }
    advert = result;
  } catch (error) {
    console.log("error", error);
    return notFound();
  }

  if (!advert) {
    return notFound();
  }

  return <AdvertClient advert={advert} />;
}
