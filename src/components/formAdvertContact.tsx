"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { apiClient } from "@/lib/utils";
import { useMask } from "@react-input/mask";
import { toast } from "sonner";

const options = {
  mask: "+55 (__) _____-____",
  replacement: { _: /\d/ },
};

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome é obrigatório. Mínimo 3 caracteres." }),
  email: z.string().email({ message: "E-mail é obrigatório" }),
  phone: z.string().refine(
    (value) => {
      const regex =
        /^\+([1-9]{1,4})\s?(\(?\d{1,4}\)?\s?)?(\d{4,5})[-\s]?\d{4}$/;
      return regex.test(value);
    },
    {
      message:
        "Número de telefone inválido. Utilize o formato internacional, por exemplo: 54 91234-5678",
    }
  ),
  message: z
    .string()
    .min(3, { message: "Mensagem é obrigatória. Mímino 3 caracteres" }),
});

type Props = {
  slug: string;
  id: string;
};

export function FormAdvertContact({ slug, id }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const inputRef = useMask(options);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await apiClient.post("/adverts/contact", {
        data: {
          values,
          slug,
          id,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast("Contato enviado com sucesso!");
    } catch (error) {
      console.log(error);
      toast(
        "Não foi possível enviar seu contato, tente novamente mais tarde ou entre em contato com nosso suporte!"
      );
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 w-full mx-auto mt-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="E-mail" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone:</FormLabel>
              <FormControl>
                <Input placeholder="Telefone" {...field} ref={inputRef} />
              </FormControl>
              <FormDescription>Ex: (00) 0 0000-0000</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Sua mensagem aqui..."
                  {...field}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          {form.formState.isSubmitting ? "Enviando" : "Enviar"}
        </Button>
      </form>
    </Form>
  );
}
