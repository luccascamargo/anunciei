import { apiClient } from "@/lib/utils";
import { UpdateAdvert } from "./updateAdvert";
import { auth } from "@/lib/auth";

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id: advert_id } = await params;

  if (!advert_id) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Erro</h1>
        <p>Ocorreu um erro ao carregar o anúncio.</p>
      </div>
    );
  }

  const user = await auth();

  if (!user) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Acesso negado</h1>
        <p>Você não está autenticado.</p>
      </div>
    );
  }

  try {
    const { data } = await apiClient.get(`/adverts/validate/`, {
      params: { user_id: user.id, advert_id },
    });

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
