import { AdvertStatsClient } from "./advert-stats-client";
import { auth } from "@/lib/auth";

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  if (!slug) {
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

  return <AdvertStatsClient slug={slug} />;
}
