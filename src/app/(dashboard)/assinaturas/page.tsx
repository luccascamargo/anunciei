"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { apiClient } from "@/lib/utils";
import { AlertTriangle, BarChart } from "lucide-react";

export default function Page() {
  const { user } = useAuth();
  const abrirPortalCliente = async () => {
    const { data } = await apiClient.get("/stripe/portal", {
      params: {
        returnUrl: `${window.location.origin}/account`,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = data.url;
  };
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">
                  <span className="text-muted-foreground">Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Assinaturas</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="w-full px-6 flex items-center justify-center">
        <Card className="w-full h-full">
          <CardContent>
            {user && user.subscriptions.length > 0 && user.plan !== "FREE" ? (
              <div className="max-w-3xl mx-auto">
                <Alert
                  className={`m-6 ${
                    user.subscriptions[0].status === "paused" ||
                    user.subscriptions[0].cancel_at_period_end
                      ? "border-destructive"
                      : "border-primary"
                  }`}
                >
                  <div className="flex items-center">
                    {user.subscriptions[0].status === "paused" ||
                    user.subscriptions[0].cancel_at_period_end ? (
                      <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
                    ) : (
                      <BarChart className="h-5 w-5 text-primary mr-2" />
                    )}
                    <AlertTitle>
                      {user?.subscriptions[0].status === "paused"
                        ? "Pagamento pendente"
                        : `Você tem o plano ${
                            user.plan === "BASIC" ? "Básico" : "PRO"
                          } ${
                            user.subscriptions[0].cycle === "month"
                              ? "mensal"
                              : "anual"
                          }`}
                    </AlertTitle>
                  </div>
                  <AlertDescription className="mt-2">
                    {user?.subscriptions[0].status === "paused" ? (
                      <div>
                        <p>
                          Sua assinatura está com pagamento pendente. Por favor,
                          atualize suas informações de pagamento.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={abrirPortalCliente}
                        >
                          Atualizar Pagamento
                        </Button>
                      </div>
                    ) : user.subscriptions[0].cancel_at_period_end ? (
                      <div className="flex flex-col items-center w-full">
                        <p>
                          Sua assinatura será cancelada em{" "}
                          {new Date(
                            user.subscriptions[0].current_period_end!
                          ).toLocaleDateString("pt-BR")}
                          . Você pode gerenciar sua assinatura a qualquer
                          momento.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={abrirPortalCliente}
                        >
                          Gerenciar Assinatura
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center w-full">
                        <p>
                          Próxima renovação em{" "}
                          {new Date(
                            user.subscriptions[0].current_period_end!
                          ).toLocaleDateString("pt-BR")}
                          . Você pode gerenciar sua assinatura a qualquer
                          momento.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={abrirPortalCliente}
                        >
                          Gerenciar Assinatura
                        </Button>
                      </div>
                    )}
                  </AlertDescription>
                </Alert>
              </div>
            ) : (
              <span className="text-sm text-muted-foreground">
                Você não possui nenhuma assinatura ativa no momento.
              </span>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
