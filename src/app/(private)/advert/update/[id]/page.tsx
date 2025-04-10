import { auth } from "@/lib/auth";
import { apiClient } from "@/lib/utils";
import { UpdateAdvert } from "./updateAdvert";
import { cookies } from "next/headers";

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id: advert_id } = await params;

  // Obtém o token do cookie no servidor
  const cookie = await cookies();
  const token = cookie.get("accessToken")?.value;

  // Verifica se o usuário está autenticado
  const user = await auth();

  if (!user) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Acesso negado</h1>
        <p>Você precisa estar logado para acessar esta página.</p>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Acesso negado</h1>
        <p>Você precisa estar logado para acessar esta página.</p>
      </div>
    );
  }

  try {
    // Envia o token manualmente no cabeçalho da requisição
    const { data } = await apiClient.post(
      "/adverts/validateAdvert",
      { data: { advert_id, user_id: user.id } },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Envia o token manualmente
        },
      }
    );

    if (!data) {
      return (
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Acesso negado</h1>
          <p>Você não tem permissão para acessar este anúncio.</p>
        </div>
      );
    }

    return <UpdateAdvert advert={data.advert} />;
  } catch (error) {
    console.error("Erro ao validar o anúncio:", error);
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Erro</h1>
        <p>Ocorreu um erro ao validar o anúncio.</p>
      </div>
    );
  }
}
