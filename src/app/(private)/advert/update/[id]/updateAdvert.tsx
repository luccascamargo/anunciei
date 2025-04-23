/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { apiClient, colors, GetCities, GetStates } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { CustomInputValue } from "@/components/customInputValue";
import { ImageDragDrop } from "@/components/imageDragDrop";
import { LoadingModal } from "@/components/loadingModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Prisma } from "@prisma/client";

const formSchema = z.object({
  ano_modelo: z
    .string({ message: "Este campo é obrigatório" })
    .refine((value) => value !== "", {
      message: "Este campo é obrigatório",
    }),
  descricao: z.string({ message: "Este campo é obrigatório" }).optional(),
  cor: z
    .string({ message: "Este campo é obrigatório" })
    .refine((value) => value !== "", {
      message: "Este campo é obrigatório",
    }),
  preco: z.string().transform((value) => value.replace(/\D/g, "")),
  quilometragem: z.string().transform((value) => value.replace(/\D/g, "")),
  estado: z
    .string({ message: "Este campo é obrigatório" })
    .refine((value) => value !== "", {
      message: "Este campo é obrigatório",
    }),
  cidade: z
    .string({ message: "Este campo é obrigatório" })
    .refine((value) => value !== "", {
      message: "Este campo é obrigatório",
    }),
  portas: z
    .string({ message: "Este campo é obrigatório" })
    .refine((value) => value !== "", {
      message: "Este campo é obrigatório",
    }),
  cambio: z.string().refine((value) => value !== "", {
    message: "Este campo é obrigatório",
  }),
  opcionais: z.array(z.string().optional()).optional(),
});

interface iOptional {
  id: string;
  name: string;
}

type FileInput = {
  id: string;
  file?: File;
  url: string;
};

const types = [
  {
    name: "Carros",
    value: "carros",
  },
  {
    name: "Caminhões",
    value: "caminhoes",
  },
  {
    name: "Motos",
    value: "motos",
  },
];

type Props = {
  advert: Prisma.AdvertsGetPayload<{
    include: {
      brand: true;
      model: true;
      user: true;
      images: true;
      optionals: true;
    };
  }>;
};

export function UpdateAdvert({ advert }: Props) {
  const { user } = useAuth();
  const { push } = useRouter();
  const [selectedFiles, setSelectedFiles] = useState<FileInput[]>(
    advert.images
  );
  const [oldImages, setOldImages] = useState<FileInput[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      descricao: advert.description || "",
      opcionais: advert.optionals?.map((opcional) => opcional.id) || [],
      ano_modelo: advert.year_model.toString() || "",
      cor: advert.color || "",
      cambio: advert.transmission || "",
      estado: advert.state || "",
      cidade: advert.city || "",
      portas: advert.doors || "",
      preco: advert.price.toString() || "",
      quilometragem: advert.mileage.toString() || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) {
      return;
    }
    const imagesUploaded = selectedFiles.length + oldImages.length;

    if (imagesUploaded === 0) {
      return toast("Nenhuma imagem selecionada.");
    }

    if (user.plan === "FREE" && imagesUploaded > 6) {
      return toast("Seu plano não permite mais que 3 fotos");
    }

    if (user.plan === "BASIC" && imagesUploaded > 12) {
      return toast("Seu plano não permite mais que 6 fotos");
    }

    const formData = new FormData();

    for (const image of selectedFiles) {
      if (image.file) {
        formData.append("file", image.file);
      }
    }

    if (oldImages.length > 0) {
      const idsToRemove = oldImages.map((image) => image.id).join(",");
      formData.append("imagens_remover", idsToRemove);
    }

    formData.append("ano_modelo", values.ano_modelo);
    formData.append("descricao", values.descricao || "");
    formData.append("cor", values.cor);
    formData.append("preco", values.preco);
    formData.append("quilometragem", values.quilometragem);
    formData.append("estado", values.estado);
    formData.append("cidade", values.cidade);
    formData.append("portas", values.portas);
    formData.append("cambio", values.cambio);

    if (values.opcionais && values.opcionais.length > 0) {
      formData.append("opcionais", values.opcionais.filter(Boolean).join(","));
    }

    updateAdvert.mutateAsync(formData);
  }

  const handleFileSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files && files.length > 0) {
      const newImagesWithId = files.map((file) => ({
        id: `temp-${Date.now()}-${Math.random()}`, // ID temporário
        file, // Arquivo da imagem
        url: URL.createObjectURL(file), // URL temporária para pré-visualização
      }));
      setSelectedFiles((prevFiles) => [...prevFiles, ...newImagesWithId]);
    }
  };

  const handleRemoveImage = (thumb: string) => {
    if (thumb.startsWith("https")) {
      const imageToRemove = selectedFiles.find((file) => file.url === thumb);
      if (imageToRemove) {
        setOldImages((prevImages) => [...prevImages, imageToRemove]);
      }
    }
    setSelectedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((file) => file.url !== thumb);
      return [...updatedFiles];
    });

    const fileInput = document.getElementById("photoInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const updateAdvert = useMutation({
    mutationKey: ["updateAdvert", advert.id],
    mutationFn: async (formData: FormData) => {
      const { data } = await apiClient.patch(
        `/adverts/update/${advert.id}`,
        formData
      );
      return data;
    },
    onSuccess: () => {
      toast("Anúncio alterado com sucesso!", {
        description: "Seu anúncio será revisado e logo será listado.",
        action: {
          label: "Ok",
          onClick: () => console.log("ok"),
        },
      });
      form.reset();
      push("/account/ads?type=requested");
    },
    onError: (error: any) => {
      console.error("Update Advert Error:", error);
      toast("Erro ao editar seu anúncio", {
        description: error?.response?.data?.message || "Erro desconhecido.",
        action: {
          label: "Ok",
          onClick: () => console.log("ok"),
        },
      });
    },
  });

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return; // Se o item foi solto fora da lista, não faz nada

    const reorderedFiles = Array.from(selectedFiles);
    const [removed] = reorderedFiles.splice(result.source.index, 1);
    reorderedFiles.splice(result.destination.index, 0, removed);

    setSelectedFiles(reorderedFiles);
  };

  const getOptionals = useQuery({
    queryKey: ["getOptionals"],
    queryFn: async () => {
      const { data } = await apiClient.get("/optionals", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    },
  });

  const fetchStates = useQuery({
    queryKey: ["fetchStates"],
    queryFn: async () => GetStates(),
  });

  const getCities = useMutation({
    mutationKey: ["fetchCities"],
    mutationFn: async (sigla: string) => await GetCities(sigla),
  });

  useEffect(() => {
    const state = form.watch("estado");
    if (state && state !== "default") {
      getCities.mutate(state);
      return;
    }
  }, [form.watch("estado")]);

  return (
    <div className="container px-6 m-auto flex items-center justify-center">
      <Card className="mt-10 w-full">
        <CardHeader>
          <CardTitle>Crie seu anúncio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full flex flex-col gap-16 pt-10">
            <div className="flex flex-col lg:flex-row gap-8 w-full">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileSelection}
                  className="hidden"
                  id="photoInput"
                />
                <label
                  htmlFor="photoInput"
                  className="cursor-pointer w-32 h-32 bg-primary-foreground border flex items-center justify-center text-center rounded-md shadow-sm"
                >
                  <span className="text-base">
                    Adicionar <br />
                    Foto
                  </span>
                </label>
              </div>
              <div className="w-full flex items-center flex-wrap">
                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable
                    droppableId="images"
                    type="list"
                    direction="horizontal"
                  >
                    {(provided: any) => (
                      <article
                        className="max-w-[1000px] flex flex-wrap items-center gap-9"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {selectedFiles.map((file, index) => (
                          <ImageDragDrop
                            id={file.id}
                            key={index}
                            index={index}
                            thumb={file.url}
                            handleRemoveImage={handleRemoveImage}
                          />
                        ))}
                        {provided.placeholder}
                      </article>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 w-full lg:w-[400px]"
              >
                <FormItem>
                  <FormLabel>Tipo de veiculo</FormLabel>
                  <FormControl>
                    <Select disabled value={advert.type}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Selecione</SelectItem>
                        {types.map((type, idx: number) => (
                          <SelectItem value={type.value} key={idx}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>

                <FormItem>
                  <FormLabel>Marca</FormLabel>
                  <FormControl>
                    <Select disabled value={advert.brand.name}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={advert.brand.name}>
                          {advert.brand.name}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>

                <FormItem>
                  <FormLabel>Modelo</FormLabel>
                  <FormControl>
                    <Select disabled value={advert.model.name}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={advert.model.name}>
                          {advert.model.name}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>

                <FormField
                  control={form.control}
                  name="ano_modelo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ano modelo</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue
                              placeholder={"Selecione"}
                              ref={field.ref}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Selecione</SelectItem>
                            {Array.from(
                              { length: new Date().getFullYear() - 1960 + 2 },
                              (_, i) => 1960 + i
                            )
                              .reverse()
                              .map((year, idx) => (
                                <SelectItem value={year.toString()} key={idx}>
                                  {year}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="descricao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Descrição aqui" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cor</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Selecione</SelectItem>
                            {colors.map((color, index: number) => (
                              <SelectItem value={color.code} key={index}>
                                {color.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <CustomInputValue
                  form={form}
                  label="R$"
                  name="preco"
                  isPrice
                  placeholder="R$ 99.999.999"
                />

                <FormItem>
                  <FormLabel>Placa</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Sua placa aqui"
                      value={advert.plate}
                      disabled
                    />
                  </FormControl>
                  <FormDescription>
                    Não se preocupe, sua placa não será exibida no anúncio.
                  </FormDescription>
                </FormItem>

                <CustomInputValue
                  form={form}
                  label="Km"
                  name="quilometragem"
                  placeholder="KM"
                />

                <FormField
                  control={form.control}
                  name="estado"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Estado</FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => {
                              field.onChange(value);
                            }}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="default">Selecione</SelectItem>
                              {fetchStates.data?.map((state, idx) => (
                                <SelectItem value={state.sigla} key={idx}>
                                  {state.nome}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="cidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          name={field.name}
                          onValueChange={field.onChange}
                          disabled={getCities.isSuccess !== true}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder="Selecione"
                              ref={field.ref}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Selecione</SelectItem>
                            {getCities.data?.map((city, idx) => (
                              <SelectItem value={city.nome} key={idx}>
                                {city.nome}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="portas"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portas</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Selecione</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cambio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cambio</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Selecione</SelectItem>
                            <SelectItem value="manual">Manual</SelectItem>
                            <SelectItem value="automatico">
                              Automatico
                            </SelectItem>
                            <SelectItem value="automatizado">
                              Automatizado
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <ScrollArea className="h-72 w-full md:w-96 rounded-md border p-2">
                  <FormField
                    control={form.control}
                    name="opcionais"
                    render={() => (
                      <FormItem>
                        <FormLabel>Opcionais</FormLabel>
                        {getOptionals.data?.map((item: iOptional) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="opcionais"
                            render={({ field }) => {
                              return (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        const currentItems =
                                          form.getValues("opcionais") || [];
                                        if (checked) {
                                          form.setValue("opcionais", [
                                            ...currentItems,
                                            item.id,
                                          ]);
                                        } else
                                          form.setValue(
                                            "opcionais",
                                            currentItems.filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {item.name}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </ScrollArea>

                <Button type="submit" className="transition-all">
                  {updateAdvert.isPending ? (
                    <span className="flex items-center gap-6">
                      Editando anúncio...
                    </span>
                  ) : (
                    <span>Editar anúncio</span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
      <LoadingModal
        isOpen={updateAdvert.isPending}
        title="Aguarde, isso pode levar alguns segundos..."
        subTitle="Processando anúncio"
        description="Estamos processando seu anúncio. Por favor, aguarde..."
      />
    </div>
  );
}
