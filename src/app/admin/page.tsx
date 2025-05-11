import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { FileText, Users } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const user = await auth();

  if (!user || user.role !== "ADMIN") {
    redirect("/");
  }
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Painel Administrativo</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/admin/usuarios">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Gerenciar Usuários
              </CardTitle>
              <CardDescription>
                Visualize, ative ou desative usuários do sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Acesse a lista completa de usuários e gerencie suas permissões.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/anuncios">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Gerenciar Anúncios
              </CardTitle>
              <CardDescription>
                Visualize, aprove ou rejeite anúncios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Acesse a lista completa de anúncios e gerencie seu status de
                aprovação.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
