import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContatoForm } from "./contatoForm";

export const metadata: Metadata = {
  title: "Contato | AutoMarket",
  description:
    "Entre em contato com nossa equipe para dúvidas, suporte ou parcerias.",
};

export default function ContatoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
            Entre em Contato
          </h1>
          <p className="text-lg text-gray-600">
            Estamos aqui para ajudar com qualquer dúvida sobre nosso serviço de
            anúncios de veículos
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <ContatoForm />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contato@automarket.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Horário de Atendimento
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span>8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
