"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, BarChart, Upload } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/hooks/useAuth";
import { notFound } from "next/navigation";
import { useMask, format } from "@react-input/mask";
import { apiClient } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { SignOut } from "@/app/(public)/(auth)/signout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type FileInput = {
  id: string;
  file: File;
  url: string;
};

const options = {
  mask: "+55 (__) _____-____",
  replacement: { _: /\d/ },
};

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome muito curto" }),
  lastName: z.string().min(3, { message: "Sobrenome muito curto" }),
  email: z.string().email(),
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
});

export default function Page() {
  const { user } = useAuth();
  const [newImage, setNewImage] = useState<null | FileInput>();
  const [profileUrl, setProfileUrl] = useState<string>("");
  const inputRef = useMask(options);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      lastName: "",
      phone: "",
    },
  });

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

  const handleUploadAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files && files.length > 0) {
      const file = {
        id: `temp-${Date.now()}-${Math.random()}`, // ID temporário
        file: files[0], // Arquivo da imagem
        url: URL.createObjectURL(files[0]), // URL temporária para pré-visualização
      };
      setProfileUrl(file.url);
      setNewImage(file);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (!user) {
        return notFound();
      }
      const formdata = new FormData();

      if (newImage) {
        formdata.append("file", newImage.file);
      }

      formdata.append("name", values.name);
      formdata.append("lastname", values.lastName);
      formdata.append("phone", values.phone.replace(/\D/g, ""));

      await apiClient.patch("/users/update", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast("Alterações concluidas com sucesso!");
    } catch (error) {
      console.log(error);
      toast("Não foi possível realizar esta ação, tente novamente mais tarde.");
    }
  }

  const handleDeleteAccount = useMutation({
    mutationKey: ["deleteAccount", user?.id],
    mutationFn: async () => {
      if (!user) {
        return notFound();
      }
      await apiClient.patch("/users/delete");
    },
    onSuccess: () => {
      SignOut();
      toast("Conta excluída com sucesso!");
    },
    onError: () => {
      toast("Erro ao excluir conta, tente novamente mais tarde.");
    },
  });

  useEffect(() => {
    if (user) {
      form.setValue("name", user.name);
      form.setValue("lastName", user.lastname);
      form.setValue("email", user.email);
      form.setValue("phone", format(user.phone || "", options));
      if (user.image) {
        setProfileUrl(user.image);
      }
    }
  }, [form, user]);

  if (!user) {
    return notFound();
  }

  return (
    <div className="container mx-auto flex flex-col justify-center pt-10 px-6">
      <Card className="flex flex-col justify-center w-full p-6 m-auto">
        <CardContent className="space-y-10 flex flex-col items-center w-full">
          <Tabs
            defaultValue={"info"}
            className="w-full flex flex-col items-center mt-10 min-h-[600px]"
          >
            <TabsList className="mb-10">
              <TabsTrigger value="info">Informações</TabsTrigger>
              <TabsTrigger value="subscriptions">Assinaturas</TabsTrigger>
            </TabsList>
            <TabsContent
              value="info"
              className="w-full max-w-[500px] flex flex-col space-y-5"
            >
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadAvatar}
                  className="hidden"
                  id="photoInput"
                />
                <label
                  htmlFor="photoInput"
                  className="group overflow-hidden relative cursor-pointer w-32 h-32 flex items-center justify-center text-center rounded-full shadow-sm"
                >
                  <span className="text-base font-medium transition-all absolute z-20 text-primary opacity-0 group-hover:opacity-100">
                    <Upload />
                  </span>
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={profileUrl} className="object-cover" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </label>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome:</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sobrenome:</FormLabel>
                        <FormControl>
                          <Input placeholder="Sobrenome" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail:</FormLabel>
                        <FormControl>
                          <Input placeholder="E-mail" {...field} disabled />
                        </FormControl>
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
                          <Input
                            placeholder="Telefone"
                            {...field}
                            ref={inputRef}
                          />
                        </FormControl>
                        <FormDescription>Ex: (00) 0 0000-0000</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant={"outline"}
                    disabled={form.formState.isSubmitting}
                    type="submit"
                  >
                    {form.formState.isSubmitting
                      ? "Salvando informações"
                      : "Salvar"}
                  </Button>
                </form>
                <AlertDialog>
                  <AlertDialogTrigger className="text-sm text-destructive cursor-pointer">
                    Excluir minha conta
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Você tem certeza disso?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Essa ação não pode ser desfeita. Isto irá
                        permanentemente exclua sua conta e remova seus dados de
                        nosso servidores
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>

                      <AlertDialogAction
                        onClick={() => handleDeleteAccount.mutate()}
                      >
                        Continuar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Form>
            </TabsContent>
            <TabsContent
              value="subscriptions"
              className="flex items-center justify-center space-y-5 w-full max-w-[500px] text-center"
            >
              {user && user.subscriptions.length > 0 && user.plan !== "FREE" ? (
                <div className="max-w-3xl mx-auto mb-10">
                  <Alert
                    className={`mb-6 ${
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
                            Sua assinatura está com pagamento pendente. Por
                            favor, atualize suas informações de pagamento.
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
