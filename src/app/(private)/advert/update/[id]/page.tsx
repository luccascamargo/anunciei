import { auth } from "@/lib/auth";
import { apiClient } from "@/lib/utils";
import { UpdateAdvert } from "./updateAdvert";
import { cookies } from "next/headers";

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id: advert_id } = await params;
  const cookie = await cookies();
  const token = cookie.get("accessToken")?.value;

  const user = await auth();

  if (!user) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Acesso negado</h1>
        <p>Você precisa estar logado para acessar esta página.</p>
      </div>
    );
  }

  const { data } = await apiClient.post("/adverts/validateAdvert", {
    data: { advert_id, user_id: user.id },
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!data) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Acesso negado</h1>
        <p>Você não tem permissão para acessar este anúncio.</p>
      </div>
    );
  }

  return <UpdateAdvert advert={data} />;
}
