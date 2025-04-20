import { getOptionals } from "@/lib/actions/optionals";
import { ComponentType } from "./componentType";

export default async function OptionalsProvider({ slug }: { slug: string }) {
  const optionals = await getOptionals();
  return <ComponentType slug={slug} initialOptionals={optionals} />;
}
