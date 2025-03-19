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
import { api, apiFormData, colors, GetCities, GetStates } from "@/lib/utils";
import { iTypes } from "@/app/page";
import { Textarea } from "@/components/ui/textarea";
import { CustomInputValue } from "@/components/customInputValue";
import { ImageDragDrop } from "@/components/imageDragDrop";

const formSchema = z.object({
  tipo: z
    .string({ message: "Este campo é obrigatório" })
    .refine((value) => value !== "", {
      message: "Este campo é obrigatório",
    }),
  marca: z
    .string({ message: "Este campo é obrigatório" })
    .refine((value) => value !== "", {
      message: "Este campo é obrigatório",
    }),
  modelo: z.string({ message: "Este campo é obrigatório" }),
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
  placa: z.string().refine((value) => value !== "", {
    message: "Este campo é obrigatório",
  }),
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
  nome: string;
}

type FileInput = {
  id: string;
  file: File;
  url: string;
};

type Brand = {
  _id: string;
  Label: string;
  Value: string;
  codigoTipoVeiculo: string;
};

type Model = {
  _id: string;
  Label: string;
  Value: number;
  codigoTipoVeiculo: string;
  codigoMarcaVeiculo: string;
};

export default function Page() {
  const { user } = useAuth();
  const { push } = useRouter();
  const [selectedFiles, setSelectedFiles] = useState<FileInput[]>([]);
  const [photos, setPhotos] = useState<{ key: string; uri: string }[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      descricao: "",
      marca: "",
      tipo: "",
      ano_modelo: "",
      modelo: "",
      cor: "",
      cambio: "",
      placa: "",
      estado: "",
      cidade: "",
      portas: "",
      preco: "",
      quilometragem: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) {
      return;
    }
    const imagesUploaded = photos.length + selectedFiles.length;

    if (selectedFiles.length === 0) {
      return toast("Nenhuma imagem selecionada.");
    }

    if (user?.plano === "GRATIS" && imagesUploaded > 3) {
      return toast("Seu plano não permite mais que 3 fotos");
    }

    if (user?.plano === "BASICO" && imagesUploaded > 5) {
      return toast("Seu plano não permite mais que 5 fotos");
    }

    switch (values.tipo) {
      case "1":
        values.tipo = "carros";
        break;
      case "2":
        values.tipo = "motos";
        break;
      case "3":
        values.tipo = "caminhoes";
        break;
      default:
        break;
    }

    const selectedBrand = getBrands.data?.find(
      (brand: Brand) => brand.Value === values.marca
    );

    if (!selectedBrand) {
      return toast("Marca não encontrada");
    }

    values.marca = selectedBrand.Label;

    const selectedModel = getModels.data?.find(
      (model: Model) => model.Value === Number(values.modelo)
    );

    if (!selectedModel) {
      return toast("Modelo não encontrado");
    }

    values.modelo = selectedModel.Label;

    const selectedState = fetchStates.data?.find(
      ({ id }: { nome: string; id: number }) => id === Number(values.estado)
    );

    if (!selectedState) {
      return toast("Estado não encontrado");
    }

    values.estado = selectedState.nome;

    const formData = new FormData();

    for (const image of selectedFiles) {
      formData.append("file", image.file);
    }

    formData.append("tipo", values.tipo);
    formData.append("marca", values.marca);
    formData.append("modelo", values.modelo);
    formData.append("ano_modelo", values.ano_modelo);
    formData.append("descricao", values.descricao || "");
    formData.append("cor", values.cor);
    formData.append("preco", values.preco);
    formData.append("placa", values.placa);
    formData.append("quilometragem", values.quilometragem);
    formData.append("estado", values.estado);
    formData.append("cidade", values.cidade);
    formData.append("portas", values.portas);
    formData.append("cambio", values.cambio);
    formData.append("usuario_id", user.id);

    if (values.opcionais) {
      values.opcionais.forEach((opcional) =>
        formData.append("opcionais", opcional || "")
      );
    }

    const entries = Array.from(formData.entries());
    console.log(entries);

    createAdvert.mutate(formData);
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

  const handleRemoveImage = (id: string) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((file) => file.id !== id);
      return [...updatedFiles];
    });

    const fileInput = document.getElementById("photoInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const createAdvert = useMutation({
    mutationKey: ["create_advert"],
    mutationFn: async (formData: FormData) => {
      const result = await apiFormData("/adverts", formData, {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer`,
        },
      });
      return result;
    },
    onSuccess: () => {
      toast("Anúncio cadastrado com sucesso!", {
        description: "Seu anúncio sera revisado e logo será listado.",
        action: {
          label: "Ok",
          onClick: () => console.log("ok"),
        },
      });
      setPhotos([]);
      form.reset();
      return push("/meus-anuncios?tipo=em aprovacao");
    },
    onError: (err) => {
      console.log(err);
      toast("Erro ao criar seu anúncio", {
        description: err.message,
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
      return await api("/optionals");
    },
  });

  const fetchTypes = useQuery({
    queryKey: ["getTypes"],
    queryFn: async () => {
      return await api("/fipe/types", { method: "GET" });
    },
  });

  const getBrands = useMutation({
    mutationKey: ["getBrands"],
    mutationFn: async (type: string) => {
      return await api(`/fipe/brands/${type}`);
    },
  });

  const getModels = useMutation({
    mutationKey: ["getModels"],
    mutationFn: async ({ type, board }: { type: string; board: string }) => {
      return await api(`/fipe/models/${type}/${board}`);
    },
  });

  const fetchStates = useQuery({
    queryKey: ["fetchStates"],
    queryFn: async () => GetStates(),
  });

  const getCities = useMutation({
    mutationKey: ["getCities"],
    mutationFn: async (id: string) => {
      return await GetCities(id);
    },
  });

  const getYearsModel = useMutation({
    mutationKey: ["getYearsModel"],
    mutationFn: async ({
      type,
      brand,
      model,
    }: {
      type: string;
      brand: string;
      model: string;
    }) => {
      return await api(`/fipe/years/${type}/${brand}/${model}`);
    },
  });

  useEffect(() => {
    const value = form.watch("tipo");
    if (value) {
      getBrands.mutate(value);
    }
  }, [form.watch("tipo")]);

  useEffect(() => {
    const type = form.watch("tipo");
    const board = form.watch("marca");
    if (type && board) {
      getModels.mutate({ type, board });
    }
  }, [form.watch("marca")]);

  useEffect(() => {
    const type = form.getValues("tipo");
    const model = form.getValues("modelo");
    const brand = form.getValues("marca");
    if (type !== "" && model !== "" && brand !== "") {
      getYearsModel.mutate({
        type,
        brand,
        model,
      });
    }
  }, [form.watch("modelo")]);

  useEffect(() => {
    const state = form.watch("estado");
    if (state) {
      getCities.mutate(state);
    }
  }, [form.watch("estado")]);

  return (
    <div className="container m-auto flex items-center justify-center">
      <Card className="mt-10 w-full">
        <CardHeader>
          <CardTitle>Crie seu anúncio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-screen px-6 flex flex-col gap-16 max-w-[1920px] pt-10">
            <div className="flex gap-8 w-full">
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
                  className="cursor-pointer w-32 h-32 bg-primary-foreground border flex items-center justify-center text-center rounded-md shadow"
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
                        className="max-w-[1000px] flex flex-wrap items-center gap-9 px-8"
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
                className="space-y-5 w-[400px]"
              >
                <FormField
                  control={form.control}
                  name="tipo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de veiculo</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          name={field.name}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder="Selecione"
                              ref={field.ref}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Selecione</SelectItem>
                            {fetchTypes?.data?.map(
                              (type: iTypes, idx: number) => (
                                <SelectItem
                                  value={type.value.toString()}
                                  key={idx}
                                >
                                  {type.name}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="marca"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Marca</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          name={field.name}
                          disabled={form.getValues("tipo") === ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder={
                                getBrands.isPending
                                  ? "Buscando Marcas"
                                  : "Selecione"
                              }
                              ref={field.ref}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Selecione</SelectItem>
                            {getBrands.data?.map((brand: any, idx: number) => (
                              <SelectItem value={brand.Value} key={idx}>
                                {brand.Label}
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
                  name="modelo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Modelo</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          name={field.name}
                          disabled={form.getValues("marca") === ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder={
                                getModels.isPending
                                  ? "Buscando Modelos"
                                  : "Selecione"
                              }
                              ref={field.ref}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Selecione</SelectItem>
                            {getModels?.data?.map((model: any, idx: number) => (
                              <SelectItem
                                value={model.Value.toString()}
                                key={idx}
                              >
                                {model.Label}
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
                  name="ano_modelo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ano modelo</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          value={field.value}
                          disabled={form.getValues("modelo") === ""}
                        >
                          <SelectTrigger>
                            <SelectValue
                              placeholder={
                                getYearsModel.isPending
                                  ? "Buscando Ano Modelo"
                                  : "Selecione"
                              }
                              ref={field.ref}
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-primary-foreground">
                            <SelectItem value="default">Selecione</SelectItem>
                            {getYearsModel?.data?.map(
                              (yearModel: any, idx: number) => (
                                <SelectItem value={yearModel.Value} key={idx}>
                                  {yearModel.Label}
                                </SelectItem>
                              )
                            )}
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
                          <SelectContent className="bg-primary-foreground">
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
                  placeholder="R$ 99.999.999"
                />

                <FormField
                  control={form.control}
                  name="placa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Placa</FormLabel>
                      <FormControl>
                        <Input placeholder="Sua placa aqui" {...field} />
                      </FormControl>
                      <FormDescription>
                        Não se preocupe, sua placa não será exibida no anúncio.
                      </FormDescription>
                    </FormItem>
                  )}
                />

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
                              {fetchStates.data?.map((state) => (
                                <SelectItem
                                  value={state.id.toString()}
                                  key={state.id}
                                >
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
                            {getCities.data?.map((city) => (
                              <SelectItem value={city.nome} key={city.id}>
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
                          <SelectContent className="bg-primary-foreground">
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
                          <SelectContent className="bg-primary-foreground">
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
                                  {item.nome}
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

                <Button type="submit" className="transition-all">
                  {createAdvert.isPending ? (
                    <span className="flex items-center gap-6">
                      Criando anúncio...
                    </span>
                  ) : (
                    <span>Criar anúncio</span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
