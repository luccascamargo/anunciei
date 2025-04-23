import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./ContactForm";

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

        <div className="">
          <Card>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
