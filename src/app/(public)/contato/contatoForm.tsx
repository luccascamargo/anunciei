"use client";

import type React from "react";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ContatoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast("Mensagem enviada com sucesso!");

    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome completo</Label>
            <Input id="nome" placeholder="Seu nome completo" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" placeholder="(00) 00000-0000" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="assunto">Assunto</Label>
            <Input id="assunto" placeholder="Assunto da mensagem" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Você é:</Label>
          <RadioGroup defaultValue="comprador" className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comprador" id="comprador" />
              <Label htmlFor="comprador" className="cursor-pointer">
                Comprador
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vendedor" id="vendedor" />
              <Label htmlFor="vendedor" className="cursor-pointer">
                Vendedor
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="concessionaria" id="concessionaria" />
              <Label htmlFor="concessionaria" className="cursor-pointer">
                Concessionária
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="outro" id="outro" />
              <Label htmlFor="outro" className="cursor-pointer">
                Outro
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensagem">Mensagem</Label>
          <Textarea
            id="mensagem"
            placeholder="Descreva sua dúvida ou solicitação em detalhes..."
            className="min-h-[150px]"
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>Enviando...</>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Enviar mensagem
          </>
        )}
      </Button>
    </form>
  );
}
