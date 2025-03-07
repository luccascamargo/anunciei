"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload } from "lucide-react";
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
import { Wrapper } from "@/components/wrapper";
import { useAuth } from "@/hooks/useAuth";

const formSchema = z.object({
  firstName: z.string().min(3, { message: "Nome muito curto" }),
  lastName: z.string().min(3, { message: "Sobrenome muito curto" }),
  email: z.string().email(),
  phone: z
    .string()
    .min(15, { message: "O número precisa seguir o formato acima" }),
});

export default function Page() {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [newImage, setNewImage] = useState<null | string>(null);

  const handleBillingPortal = async () => {
    // if (data_user) {
    //   const res = await HandleBillingPortal({
    //     customer: data_user?.customer_id,
    //   });
    //   if (res.error) {
    //     return toast("Erro ao prosseguir com sua consulta", {
    //       description: "Tente novamente mais tarde",
    //       important: true,
    //       action: {
    //         label: "Ok",
    //         onClick: () => console.log("ok"),
    //       },
    //     });
    //   }
    //   if (res.result) {
    //     return push(res.result);
    //   }
    // }
  };

  const handleTelefoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputTelefone = event.target.value;

    // Remove todos os caracteres não numéricos
    const cleanedTelefone = inputTelefone.replace(/\D/g, "");

    // Aplica a máscara dependendo do comprimento do número
    if (cleanedTelefone.length <= 2) {
      form.setValue("phone", cleanedTelefone);
    } else if (cleanedTelefone.length <= 6) {
      form.setValue(
        "phone",
        `(${cleanedTelefone.slice(0, 2)}) ${cleanedTelefone.slice(2)}`
      );
    } else if (cleanedTelefone.length <= 10) {
      form.setValue(
        "phone",
        `(${cleanedTelefone.slice(0, 2)}) ${cleanedTelefone.slice(
          2,
          6
        )}-${cleanedTelefone.slice(6)}`
      );
    } else {
      form.setValue(
        "phone",
        `(${cleanedTelefone.slice(0, 2)}) ${cleanedTelefone.slice(
          2,
          7
        )}-${cleanedTelefone.slice(7, 11)}`
      );
    }
  };

  const handleUploadAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setUploading(true);

    if (files && files.length > 0) {
      for (const file of files) {
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            files: [
              {
                filename: file.name,
                contentType: file.type,
              },
            ],
          }),
        });

        const { uploads } = await response.json();

        if (response.ok) {
          for (const upload of uploads) {
            const formData = new FormData();
            Object.entries(upload.fields).forEach(([key, value]) => {
              formData.append(key, value as string);
            });
            formData.append("file", file);

            const uploadResponse = await fetch(upload.url, {
              method: "POST",
              body: formData,
              mode: "cors",
            });

            if (uploadResponse.ok) {
              setUploading(false);
              setNewImage(`${upload.url}${upload.fields.key}`);
            } else {
              console.error("Falha ao enviar arquivo:", file.name);
              setUploading(false);
              toast("Erro ao anexar sua imagem", {
                description:
                  "Algo de errado aconteceu. Entre em contato com nosso suporte",
                action: {
                  label: "Ok",
                  onClick: () => console.log("ok"),
                },
              });
            }
          }
        } else {
          console.error("Erro ao obter URL presignada para:", file.name);
          toast("Erro ao anexar sua imagem", {
            description:
              "Algo de errado aconteceu. Entre em contato com nosso suporte",
            action: {
              label: "Ok",
              onClick: () => console.log("ok"),
            },
          });
          setUploading(false);
        }
      }
      return;
    }
    setUploading(false);
    return toast("Erro ao anexar sua imagem", {
      description:
        "Algo de errado aconteceu. Entre em contato com nosso suporte",
      action: {
        label: "Ok",
        onClick: () => console.log("ok"),
      },
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user?.email,
      firstName: user?.nome,
      lastName: user?.sobrenome,
      phone: user?.telefone || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await fetch(`/user`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          avatar: newImage || "",
        }),
      });
      return toast("Usuário alterado com sucesso", {
        action: {
          label: "Ok",
          onClick: () => console.log("ok"),
        },
      });
    } catch (error) {
      console.log(error);
      return toast("Erro ao editar esta usuario", {
        description:
          "Tente novamente mais tarde ou entre em contato com nosso suporte",
        action: {
          label: "Ok",
          onClick: () => console.log("ok"),
        },
      });
    }
  }

  const handleDeleteAccount = async () => {
    try {
      // if (user) {
      //   setIsDeleting(true);
      //   await fetch(`/user/id`, {
      //     method: "DELETE",
      //   });
      //   setIsDeleting(false);
      //   return toast("Conta deletada com sucesso", {
      //     action: {
      //       label: "Ok",
      //       onClick: () => console.log("ok"),
      //     },
      //   });
      // }
    } catch {
      setIsDeleting(false);
      return toast(
        "Não foi possivel realizar esta ação, tente novamente mais tarde.",
        {
          action: {
            label: "Ok",
            onClick: () => console.log("ok"),
          },
        }
      );
    }
  };

  return (
    <Wrapper className="flex flex-col justify-center pt-10">
      {/* <Skeleton className="h-96 w-full" /> */}
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
                  className="group overflow-hidden relative cursor-pointer w-32 h-32 flex items-center justify-center text-center rounded-full shadow"
                >
                  <span className="text-base font-medium transition-all absolute z-20 text-primary opacity-0 group-hover:opacity-100">
                    <Upload />
                  </span>
                  {uploading ? (
                    <span>carregando...</span>
                  ) : (
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={newImage || ""} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  )}
                </label>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="firstName"
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
                            onChange={handleTelefoneChange}
                          />
                        </FormControl>
                        <FormDescription>Ex: (00) 0 0000-0000</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant={"outline"}
                    disabled={form.formState.isSubmitting === true}
                    type="submit"
                  >
                    {form.formState.isSubmitting
                      ? "Salvando informações"
                      : "Salvar"}
                  </Button>
                </form>
                <AlertDialog>
                  <AlertDialogTrigger className="text-sm text-destructive">
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

                      <AlertDialogAction onClick={handleDeleteAccount}>
                        Continuar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Form>
            </TabsContent>
            <TabsContent
              value="subscriptions"
              className="flex items-center justify-center space-y-5 w-full max-w-[500px]"
            >
              {/* {data_user?.plan !== "GRATIS" ? ( */}
              <CardFooter>
                <Button variant={"default"} onClick={handleBillingPortal}>
                  Administrar assinaturas
                </Button>
              </CardFooter>
              {/* ) : ( */}
              <span className="text-muted-foreground ">
                Você não possui nenhuma assinatura ativa
              </span>
              {/* )} */}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </Wrapper>
  );
}
