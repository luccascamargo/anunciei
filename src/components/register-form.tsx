"use client";
import { apiClient } from "@/lib/utils";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoadingModal } from "./loadingModal";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome deve ter pelo menos 3 caracteres." }),
  lastName: z.string({ message: "Sobrenome é obrigatório." }).min(3, {
    message: "Sobrenome deve ter pelo menos 3 caracteres.",
  }),
  email: z.string().email({ message: "Email inválido." }),
  password: z
    .string()
    .min(8, { message: "Senha deve ter pelo menos 8 caracteres." }),
});

export function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await apiClient
      .post("/auth/register", {
        data: {
          name: values.name,
          lastname: values.lastName,
          email: values.email,
          password: values.password,
        },
      })
      .then(() => {
        toast("Conta criada com sucesso!");
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 409) {
          toast.error("Usuário já existe.");
        } else if (err.response.status === 422) {
          toast.error("Dados inválidos.");
        } else {
          toast.error("Erro ao criar conta.");
        }
      });
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Registrar</CardTitle>
          <CardDescription>
            Entre com o seu email e senha para registrar sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Lucas" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>
                    <FormControl>
                      <Input placeholder="Silva" {...field} />
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
                      <Input placeholder="Email" type="email" {...field} />
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
                      <Input placeholder="Senha" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <Button type="submit" className="w-full">
                  {form.formState.isSubmitting ? "Enviando..." : "Registrar"}
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Entrar com Google
                </Button> */}
              </div>
              <div className="mt-4 text-center text-sm">
                Já tem uma conta?{" "}
                <a href="/entrar" className="underline underline-offset-4">
                  Entrar
                </a>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <LoadingModal
        description="Estamos validando suas informações."
        isOpen={form.formState.isSubmitting}
        subTitle="Aguarde, isso pode demorar um pouco"
        title="Validando..."
      />
    </div>
  );
}
