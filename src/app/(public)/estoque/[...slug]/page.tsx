import { notFound } from "next/navigation";
import { ComponentType } from "./componentType";
import { ComponentBrand } from "./componentBrand";
import { apiClient } from "@/lib/utils";

export default async function TypePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  if (slug.length === 1) {
    return <ComponentType slug={slug[0]} />;
  }

  if (slug.length === 2) {
    const { data } = await apiClient(`/models/${slug[1]}`);

    if (!data) {
      return notFound();
    }
    return <ComponentBrand slug={slug} models={data} />;
  }

  return notFound();
}
