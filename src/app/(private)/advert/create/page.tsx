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
import { Opcionai } from "@/types/FilterAdverts";
import { LoadingModal } from "@/components/loadingModal";
import { Progress } from "@/components/ui/progress";
import {
  BookText,
  Image as ImageIcon,
  Info,
  ListCollapse,
  Locate,
} from "lucide-react";

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
  id: string;
  nome: string;
  slug: string;
};

type Model = {
  id: number;
  nome: string;
  slug: string;
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

const steps = [
  {
    id: "informacoes-basicas",
    title: "Informações Básicas",
    fields: ["tipo", "marca", "modelo", "ano_modelo"],
    icon: <Info />,
  },
  {
    id: "detalhes",
    title: "Detalhes do Veículo",
    fields: ["descricao", "cor", "preco", "placa", "quilometragem"],
    icon: <ListCollapse />,
  },
  {
    id: "localizacao",
    title: "Localização",
    fields: ["estado", "cidade"],
    icon: <Locate />,
  },
  {
    id: "especificacoes",
    title: "Especificações",
    fields: ["portas", "cambio", "opcionais"],
    icon: <BookText />,
  },
  {
    id: "fotos",
    title: "Fotos",
    fields: [],
    icon: <ImageIcon />,
  },
];

export default function Page() {
  const { user } = useAuth();
  const { push } = useRouter();
  const [selectedFiles, setSelectedFiles] = useState<FileInput[]>([]);
  const [photos, setPhotos] = useState<{ key: string; uri: string }[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const progress = ((currentStep + 1) / steps.length) * 100;

  const findStepWithError = (errors: Record<string, any>) => {
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      const hasError = step.fields.some((field) => errors[field]);
      if (hasError) {
        return i;
      }
    }
    return -1;
  };

  const nextStep = () => {
    const currentStepFields = steps[currentStep].fields;
    const errors = form.formState.errors;

    // Verifica se há erros nos campos do step atual
    const hasErrors = currentStepFields.some(
      (field) => errors[field as keyof typeof errors]
    );

    if (hasErrors) {
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) return;

    const errors = form.formState.errors;
    if (Object.keys(errors).length > 0) {
      const stepWithError = findStepWithError(errors);
      if (stepWithError !== -1) {
        setCurrentStep(stepWithError);
        return;
      }
    }

    setIsSubmitting(true);

    try {
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
        formData.append(
          "opcionais",
          values.opcionais.filter(Boolean).join(",")
        );
      }

      await createAdvert.mutateAsync(formData);
      setPhotos([]);
      form.reset();
      return push("/account/ads?type=requested");
    } catch (error: any) {
      toast("Erro ao criar seu anúncio", {
        description:
          error.message ||
          "Ocorreu um erro ao criar seu anúncio. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
    mutationKey: ["create_advert", user?.id],
    mutationFn: async (formData: FormData) => {
      const { data } = await apiClient.post("/adverts", formData);
      return data;
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
      return push("/account/ads?type=requested");
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
    queryFn: async (): Promise<Opcionai[]> => {
      const { data } = await apiClient.get("/optionals", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    },
  });

  const getBrands = useMutation({
    mutationKey: ["brands"],
    mutationFn: async (type: string) => {
      const { data } = await apiClient.get(`/fipe/brands/${type}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    },
  });

  const getModels = useMutation({
    mutationKey: ["getModels"],
    mutationFn: async ({ brand }: { brand: string }) => {
      const { data } = await apiClient.get(`/fipe/models/${brand}`, {
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
    mutationKey: ["getCities"],
    mutationFn: async (id: string) => {
      return await GetCities(id);
    },
  });

  useEffect(() => {
    const value = form.watch("tipo");
    if (value && value !== "default") {
      getBrands.mutate(value);
    }
  }, [form.watch("tipo")]);

  useEffect(() => {
    const brand = form.watch("marca");
    if (brand && brand !== "default") {
      getModels.mutate({ brand });
    }
  }, [form.watch("marca")]);

  useEffect(() => {
    const state = form.watch("estado");
    if (state && state !== "default") {
      getCities.mutate(state);
    }
  }, [form.watch("estado")]);

  const renderStepContent = () => {
    return (
      <div className="space-y-5">
        {currentStep === 0 && (
          <>
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
                        <SelectValue placeholder="Selecione" ref={field.ref} />
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
                      disabled={getBrands.isSuccess !== true}
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
                        {getBrands.data?.map((brand: Brand, idx: number) => (
                          <SelectItem value={brand.id.toString()} key={idx}>
                            {brand.nome}
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
                      disabled={getModels.isSuccess !== true}
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
                        {getModels?.data?.map((model: Model, idx: number) => (
                          <SelectItem value={model.id.toString()} key={idx}>
                            {model.nome}
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
          </>
        )}

        {currentStep === 1 && (
          <>
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
          </>
        )}

        {currentStep === 2 && (
          <>
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
                        <SelectValue placeholder="Selecione" ref={field.ref} />
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
          </>
        )}

        {currentStep === 3 && (
          <>
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
                        <SelectItem value="automatico">Automatico</SelectItem>
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
          </>
        )}

        {currentStep === 4 && (
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
                className="cursor-pointer w-32 h-32 bg-primary-foreground border flex items-center justify-center text-center rounded-md shadow-sm"
              >
                <span className="text-base">
                  Adicionar <br />
                  Foto
                </span>
              </label>
            </div>
            <div className="w-full flex items-center">
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable
                  droppableId="images"
                  type="list"
                  direction="horizontal"
                >
                  {(provided: any) => (
                    <article
                      className="w-full max-w-[1000px] flex items-center gap-9 px-8"
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
        )}
      </div>
    );
  };

  return (
    <div className="container m-auto flex items-center justify-center">
      <Card className="mt-10 w-full min-h-screen">
        <CardHeader>
          <CardTitle>Crie seu anúncio</CardTitle>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
            <div className="grid grid-cols-5 place-items-end mt-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`text-sm flex flex-col items-center gap-2 ${
                    index <= currentStep
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.icon}
                  {step.title}
                </div>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full px-6 flex flex-col gap-16 max-w-[1920px] pt-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 w-[500px] mx-auto"
              >
                {renderStepContent()}

                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                  >
                    Voltar
                  </Button>
                  {currentStep === steps.length - 1 ? (
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Criando anúncio..." : "Criar anúncio"}
                    </Button>
                  ) : (
                    <Button type="button" onClick={nextStep}>
                      Próximo
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>

      <LoadingModal
        isOpen={isSubmitting}
        title="Criando anúncio"
        description="Estamos processando seu anúncio. Por favor, aguarde..."
      />
    </div>
  );
}
