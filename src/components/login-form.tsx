"use client";
import { fetchApi } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LoadingModal } from "./loadingModal";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido." }),
  password: z.string().min(8, {
    message: "Senha deve ter pelo menos 8 caracteres.",
  }),
});

export function SiginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const res = await fetchApi("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
      console.log(res);
      setIsLoading(false);
      toast("Login bem sucedido!");
      router.refresh();
    } catch (error) {
      toast.error("E-mail ou senha incorretos.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Entrar</CardTitle>
          <CardDescription>
            Entre com o seu email e senha para autenticar sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input placeholder="Senha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Entrar"}
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Entrar com Google
                </Button> */}
              </div>
              <div className="mt-4 text-center text-sm">
                Ainda não tem uma conta?{" "}
                <a href="/registrar" className="underline underline-offset-4">
                  Registrar
                </a>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <LoadingModal
        description="Estamos validando suas informações."
        isOpen={isLoading}
        subTitle="Aguarde, isso pode demorar um pouco"
        title="Validando..."
      />
    </div>
  );
}
