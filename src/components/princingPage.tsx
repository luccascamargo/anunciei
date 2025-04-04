"use client";

import { useState } from "react";
import { ArrowDownLeft, ArrowUpRight, Check, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apiClient } from "@/lib/utils";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

type PlanoTipo = "GRATIS" | "BASICO" | "PRO";
type FaturamentoTipo = "month" | "year";

export function PaginaPrecos() {
  const { user: userData } = useAuth();
  const [cicloFaturamento, setCicloFaturamento] =
    useState<FaturamentoTipo>("month");

  const precosMensais = {
    gratuito: 0,
    basico: 39,
    profissional: 247,
  };

  const precosAnuais = {
    gratuito: 0,
    basico: Math.round(precosMensais.basico * 12 * 0.75),
    profissional: Math.round(precosMensais.profissional * 12 * 0.75),
  };

  const economiaAnual = {
    gratuito: 0,
    basico: precosMensais.basico * 12 - precosAnuais.basico,
    profissional: precosMensais.profissional * 12 - precosAnuais.profissional,
  };

  // Função para lidar com a assinatura ou upgrade
  const handleAssinatura = async (plano: PlanoTipo) => {
    const { data } = await apiClient.get(
      `/stripe/create?plano=${plano}&ciclo=${cicloFaturamento}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.href = data;
  };

  const abrirPortalCliente = async () => {
    const { data } = await apiClient.get("/stripe/portal", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = data;
  };

  // Renderizar o botão apropriado com base no plano e assinatura atual
  const renderizarBotao = (plano: PlanoTipo) => {
    if (!userData) {
      return (
        <Button variant="outline" className="w-full">
          <Link href="/signin">Entrar</Link>
        </Button>
      );
    }
    // Se não tiver assinatura, mostrar botão para assinar
    if (!userData.plano) {
      if (plano === "GRATIS") {
        return (
          <Button variant="outline" className="w-full">
            Começar Agora
          </Button>
        );
      }
      return (
        <Button
          variant={plano === "BASICO" ? "default" : "outline"}
          className="w-full"
          onClick={() => handleAssinatura(plano)}
        >
          Assinar Agora
        </Button>
      );
    }

    // Se já tiver esse plano com o mesmo ciclo
    if (
      userData.plano === plano &&
      userData.inscricoes[0].ciclo === cicloFaturamento
    ) {
      return (
        <Button
          variant="outline"
          className="w-full"
          onClick={abrirPortalCliente}
        >
          <span>Gerenciar Assinatura</span>
          <CreditCard className="ml-2 h-4 w-4" />
        </Button>
      );
    }

    // Se for um downgrade
    if (
      (userData.plano === "PRO" && plano === "BASICO") ||
      (userData.plano !== "GRATIS" && plano === "GRATIS")
    ) {
      return (
        <Button
          variant="outline"
          className="w-full"
          onClick={abrirPortalCliente}
        >
          Fazer Downgrade
          <ArrowDownLeft className="ml-2 h-4 w-4" />
        </Button>
      );
    }

    // Se for um upgrade
    if (
      (userData.plano === "GRATIS" && plano !== "GRATIS") ||
      (userData.plano === "BASICO" && plano === "PRO")
    ) {
      return (
        <Button className="w-full" onClick={abrirPortalCliente}>
          Fazer Upgrade
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      );
    }

    // Se for apenas uma mudança de ciclo
    if (
      userData.plano === plano &&
      userData.inscricoes[0].ciclo !== cicloFaturamento
    ) {
      return (
        <Button
          variant="outline"
          className="w-full"
          onClick={abrirPortalCliente}
        >
          Mudar para {cicloFaturamento === "month" ? "mensal" : "anual"}
        </Button>
      );
    }

    // Fallback
    return (
      <Button className="w-full" onClick={abrirPortalCliente}>
        Alterar Plano
      </Button>
    );
  };

  return (
    <div className="container px-4 py-16 mx-auto md:py-24">
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Planos simples e transparentes
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Escolha o plano ideal para anunciar seus veículos e comece a vender
          hoje mesmo.
        </p>

        <div className="flex justify-center mb-8">
          <Tabs
            defaultValue="month"
            value={cicloFaturamento}
            onValueChange={(value) =>
              setCicloFaturamento(value as FaturamentoTipo)
            }
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="month">Pagamento Mensal</TabsTrigger>
              <TabsTrigger value="year" className="relative">
                Pagamento Anual
                <Badge
                  variant="secondary"
                  className="absolute -top-3 -right-3 px-2 py-0.5 text-xs bg-primary text-primary-foreground"
                >
                  -25%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Plano Gratuito */}
        <Card
          className={`flex flex-col ${
            userData?.plano === "GRATIS" ? "border-primary" : "border-border"
          }`}
        >
          <CardHeader>
            {userData?.plano === "GRATIS" && (
              <Badge className="w-fit mb-2">Seu plano atual</Badge>
            )}
            <CardTitle className="text-2xl">Gratuito</CardTitle>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-bold">R$0</span>
              <span className="text-muted-foreground">
                /{cicloFaturamento === "month" ? "mês" : "ano"}
              </span>
            </div>
            <CardDescription className="mt-3">
              Perfeito para começar a anunciar.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Até 3 anúncios ativos</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Até 5 fotos por anúncio</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Suporte por e-mail</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>{renderizarBotao("GRATIS")}</CardFooter>
        </Card>

        {/* Plano Básico */}
        <Card
          className={`flex flex-col relative ${
            userData?.plano === "BASICO"
              ? "border-primary"
              : userData
              ? "border-border"
              : "border-primary"
          }`}
        >
          {userData?.plano !== "BASICO" && (
            <Badge className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 px-3 py-1">
              Mais Popular
            </Badge>
          )}
          {userData?.plano === "BASICO" && (
            <Badge className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 px-3 py-1">
              Seu plano atual
            </Badge>
          )}
          <CardHeader>
            <CardTitle className="text-2xl">Básico</CardTitle>
            <div className="flex flex-col mt-2">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">
                  {cicloFaturamento === "month"
                    ? precosMensais.basico.toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency",
                      })
                    : precosAnuais.basico.toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency",
                      })}
                </span>
                <span className="text-muted-foreground">
                  /{cicloFaturamento === "month" ? "mês" : "ano"}
                </span>
              </div>

              {cicloFaturamento === "year" && (
                <div className="flex items-center mt-2 text-sm text-emerald-600">
                  <span>
                    Economia de R$
                    {economiaAnual.basico.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}{" "}
                    por ano
                  </span>
                </div>
              )}
            </div>
            <CardDescription className="mt-3">
              Para vendedores e pequenas revendas.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Até 10 anúncios ativos</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Estatísticas básicas de desempenho</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Suporte por e-mail em até 24h</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Até 15 fotos por anúncio</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>{renderizarBotao("BASICO")}</CardFooter>
        </Card>

        {/* Plano Pro */}
        <Card
          className={`flex flex-col ${
            userData?.plano === "PRO" ? "border-primary" : "border-border"
          }`}
        >
          {userData?.plano === "PRO" && (
            <Badge className="w-fit mx-auto mt-4">Seu plano atual</Badge>
          )}
          <CardHeader>
            <CardTitle className="text-2xl">Profissional</CardTitle>
            <div className="flex flex-col mt-2">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">
                  {cicloFaturamento === "month"
                    ? precosMensais.profissional.toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency",
                      })
                    : precosAnuais.profissional.toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency",
                      })}
                </span>
                <span className="text-muted-foreground">
                  /{cicloFaturamento === "month" ? "mês" : "ano"}
                </span>
              </div>

              {cicloFaturamento === "year" && (
                <div className="flex items-center mt-2 text-sm text-emerald-600">
                  <span>
                    Economia de R${economiaAnual.profissional} por ano
                  </span>
                </div>
              )}
            </div>
            <CardDescription className="mt-3">
              Para concessionárias e grandes revendas.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Anúncios ilimitados</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Estatísticas premium com relatórios (em breve)</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Suporte prioritário 7 dias por semana</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Fotos ilimitadas por anúncio</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary" />
                <span>Destaque premium nos resultados</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>{renderizarBotao("PRO")}</CardFooter>
        </Card>
      </div>
    </div>
  );
}
