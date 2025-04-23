"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMask } from "@react-input/mask";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useFormStatus } from "react-dom";

interface FormErrors {
  name?: string[];
  email?: string[];
  type?: string[];
  subject?: string[];
  phone?: string[];
  message?: string[];
}

const initialState = {
  errors: {} as FormErrors,
  message: "",
  success: false,
};

const options = {
  mask: "+55 (__) _____-____",
  replacement: { _: /\d/ },
};

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { pending } = useFormStatus();
  const inputRef = useMask(options);

  return (
    <div className="space-y-6">
      {state.success && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Mensagem enviada</AlertTitle>
          <AlertDescription className="text-green-700">
            Sua mensagem foi enviada com sucesso. Entraremos em contato em
            breve.
          </AlertDescription>
        </Alert>
      )}

      {state.message && !state.success && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <form action={formAction} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              name="name"
              placeholder="Seu nome completo"
              className={state.errors?.name ? "border-red-500" : ""}
            />
            {state.errors?.name && (
              <p className="text-sm text-red-500 mt-1">{state.errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu.email@exemplo.com"
              className={state.errors?.email ? "border-red-500" : ""}
            />
            {state.errors?.email && (
              <p className="text-sm text-red-500 mt-1">{state.errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="type" className="block mb-2">
              Tipo de contato
            </Label>
            <RadioGroup
              defaultValue="question"
              name="type"
              className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="question" id="question" />
                <Label htmlFor="question" className="font-normal">
                  Dúvida
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="feedback" id="feedback" />
                <Label htmlFor="feedback" className="font-normal">
                  Feedback
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="support" id="support" />
                <Label htmlFor="support" className="font-normal">
                  Suporte
                </Label>
              </div>
            </RadioGroup>
            {state.errors?.type && (
              <p className="text-sm text-red-500 mt-1">{state.errors.type}</p>
            )}
          </div>

          <div>
            <Label htmlFor="subject">Assunto</Label>
            <Select name="subject">
              <SelectTrigger
                className={state.errors?.subject ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Selecione um assunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">Informações Gerais</SelectItem>
                <SelectItem value="sales">Vendas</SelectItem>
                <SelectItem value="support">Suporte Técnico</SelectItem>
                <SelectItem value="partnership">Parcerias</SelectItem>
                <SelectItem value="other">Outro</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.subject && (
              <p className="text-sm text-red-500 mt-1">
                {state.errors.subject}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="(00) 00000-0000"
              ref={inputRef}
              className={state.errors?.phone ? "border-red-500" : ""}
            />
            {state.errors?.phone && (
              <p className="text-sm text-red-500 mt-1">{state.errors.phone}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem aqui..."
              rows={5}
              className={state.errors?.message ? "border-red-500" : ""}
            />
            {state.errors?.message && (
              <p className="text-sm text-red-500 mt-1">
                {state.errors.message}
              </p>
            )}
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Enviando..." : "Enviar mensagem"}
        </Button>
      </form>
    </div>
  );
}
