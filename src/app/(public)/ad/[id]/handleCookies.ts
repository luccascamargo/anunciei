"use server";

import { cookies } from "next/headers";

export interface AdvertCookies {
  modelo: string | undefined;
  ano: number | undefined;
  marca: string | undefined;
  preco: number | undefined;
  slug: string | undefined;
  km: number | undefined;
  cor: string | undefined;
  id: string | undefined;
  uri: string | undefined;
}

export async function handleCookies({ ...props }: AdvertCookies) {
  try {
    const arrayCookies: AdvertCookies[] = [];
    const cookieStore = await cookies();
    const model = cookieStore.get("adverts");
    if (model) {
      const arrayNewCookies: AdvertCookies[] = JSON.parse(model?.value);
      const advertFilter = arrayNewCookies.filter((ad) => ad.id === props.id);
      if (advertFilter.length > 0) {
        const removeAdvert = arrayNewCookies.filter((ad) => ad.id !== props.id);
        arrayNewCookies.push(props);
        cookieStore.set("adverts", JSON.stringify(removeAdvert));
        return;
      }
      arrayNewCookies.push(props);
      cookieStore.set("adverts", JSON.stringify(arrayNewCookies));
      return;
    }
    arrayCookies.push(props);
    cookieStore.set("adverts", JSON.stringify(arrayCookies));
  } catch (error) {
    console.log("Erro no retorno dos cookies", error);
  }
}
