"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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
import { useAuth } from "@/hooks/useAuth";
import { notFound } from "next/navigation";
import { useMask, format } from "@react-input/mask";
import { apiClient } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { SignOut } from "@/app/(public)/(auth)/signout";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  BreadcrumbPage,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">
                  <span className="text-muted-foreground">Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Conta</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="w-full flex flex-col justify-center pt-10 px-6">
        <Card className="flex flex-col justify-center w-full p-6 m-auto">
          <CardContent className="space-y-10 flex flex-col items-center w-full">
            <div className="w-full max-w-md flex flex-col items-center space-y-5">
              <div className="w-full">
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
                  className="w-full flex flex-col space-y-5"
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
              </Form>
              <AlertDialog>
                <AlertDialogTrigger className="text-sm text-destructive cursor-pointer">
                  Excluir minha conta
                </AlertDialogTrigger>
                <AlertDialogContent className="w-full">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Você tem certeza disso?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Essa ação não pode ser desfeita. Isto irá permanentemente
                      exclua sua conta e remova seus dados de nosso servidores
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
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
