/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { CardAdvert } from "@/components/cardAdvert";
import { api, GetCities, GetStates, normalizeText } from "@/lib/utils";
import { FilterAdverts } from "@/types/FilterAdverts";
import { CustomInputValue } from "@/components/customInputValue";

export interface iTypes {
  value: number;
  name: string;
}

export const formSchemaFilter = z.object({
  marca: z.string(),
  modelo: z.string(),
  busca: z.string(),
  estado: z.string(),
  cidade: z.string(),
  ano_modelo_min: z.coerce
    .string()

    .transform((value) => value?.toString()),
  ano_modelo_max: z.coerce
    .string()

    .transform((value) => value?.toString()),
  quilometragem_min: z.string(),
  tipo: z.string(),
  quilometragem_max: z.string(),
  portas: z.string(),
  preco_min: z.string(),
  preco_max: z.string(),
  opcionais: z.array(z.string().optional()).optional(),
});

interface iOptional {
  id: string;
  nome: string;
}

interface iModel {
  Label: string;
  Value: number;
  codigoTipoVeiculo: string;
}
interface iBrand {
  Label: string;
  Value: string;
  codigoTipoVeiculo: string;
}

export default function Filter() {
  const [brand, setBrand] = useState<iBrand | null>(null);
  const [model, setModel] = useState<iModel | null>(null);
  const [apiUrl, setApiUrl] = useState("http://localhost:8080/adverts/filter");

  const form = useForm<z.infer<typeof formSchemaFilter>>({
    resolver: zodResolver(formSchemaFilter),
    defaultValues: {
      portas: "",
      marca: "",
      estado: "",
      modelo: "",
      tipo: "",
      busca: "",
      opcionais: [],
      cidade: "",
      ano_modelo_max: "",
      ano_modelo_min: "",
      quilometragem_max: "",
      quilometragem_min: "",
      preco_max: "",
      preco_min: "",
    },
  });

  async function fetchAdverts(url: string): Promise<FilterAdverts> {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Erro ao buscar os anúncios");
    }

    return res.json();
  }

  function createApiUrl(params: Record<string, any>): string {
    const url = new URL("http://localhost:8080/adverts/filter");

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => url.searchParams.append(key, v));
      } else if (value !== undefined && value !== null && value !== "") {
        url.searchParams.append(key, value);
      }
    });

    return url.toString();
  }

  function onSubmit() {
    const filters = form.getValues();

    if (filters.ano_modelo_min > filters.ano_modelo_max) {
      toast("O ano mínimo não pode ser maior que o ano máximo");
      return;
    }
    if (filters.preco_min > filters.preco_max) {
      toast("O valor mínimo não pode ser maior que o valor máximo");
      return;
    }
    if (filters.quilometragem_min > filters.quilometragem_max) {
      toast(
        "A quilometragem mínima não pode ser maior que a quilometragem máxima"
      );
      return;
    }

    if (filters.busca) {
      filters.busca = normalizeText(filters.busca);
    }
    const state = fetchStates.data?.filter(
      (state) => state.id.toString() === filters.estado
    );

    if (state && state?.length > 0) {
      filters.estado = normalizeText(state[0].nome);
    }

    const url = createApiUrl(filters);
    setApiUrl(url);
  }

  const getOptionals = useQuery({
    queryKey: ["getOptionals"],
    queryFn: async () => {
      return await api("/optionals");
    },
  });

  const getBoards = useMutation({
    mutationKey: ["getBoards"],
    mutationFn: async (type: string) => {
      return await api(`/fipe/brands/${type}`);
    },
  });

  const getModels = useMutation({
    mutationKey: ["getModels"],
    mutationFn: async ({ type, brand }: { type: string; brand: string }) => {
      return await api(`/fipe/models/${type}/${brand}`);
    },
  });

  useEffect(() => {
    const value = form.watch("tipo");
    if (value) {
      getBoards.mutate(value);
    }
  }, [form.watch("tipo")]);

  useEffect(() => {
    const type = form.watch("tipo");
    if (type && brand) {
      getModels.mutate({ type, brand: brand.Value });
    }
  }, [brand]);

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

  const getAdverts = useQuery({
    queryKey: ["getAdverts", apiUrl],
    queryFn: async () => fetchAdverts(apiUrl),
  });

  const fetchTypes = useQuery({
    queryKey: ["getTypes"],
    queryFn: async () => {
      return await api("/fipe/types", { method: "GET" });
    },
  });

  useEffect(() => {
    const state = form.watch("estado");
    if (state) {
      getCities.mutate(state);
    }
  }, [form.watch("estado")]);

  const handleSelectChangeBrand = (event: string) => {
    const selectedObject = getBoards.data.filter(
      (brand: iBrand) => event === brand.Value
    );
    setBrand(selectedObject[0]);
  };

  const handleSelectChangeModel = (event: string) => {
    const selectedObject = getModels.data.filter(
      (model: iModel) => Number(event) === model.Value
    );
    setModel(selectedObject[0]);
  };

  return (
    <div className="w-screen px-6 flex flex-col gap-8 max-w-[1920px] pt-10">
      <div className="flex gap-8">
        <Card className="w-[380px] h-fit">
          <CardHeader>
            <CardTitle>Busca por categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="w-full flex flex-col gap-2">
                  <FormLabel>Buscar</FormLabel>
                  <FormField
                    control={form.control}
                    name="busca"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Buscar" type="text" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full flex gap-2 ">
                  <CustomInputValue
                    form={form}
                    label="R$"
                    name="preco"
                    placeholder="R$ 99.999.999"
                  />
                  <CustomInputValue
                    form={form}
                    label="R$"
                    name="preco"
                    placeholder="R$ 99.999.999"
                  />
                </div>
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

                <FormItem>
                  <FormLabel>Marca</FormLabel>
                  <Select
                    onValueChange={(e) => handleSelectChangeBrand(e)}
                    value={brand?.Value}
                    disabled={getBoards.isSuccess !== true}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          getBoards.isPending ? "Buscando Modelos" : "Selecione"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Selecione</SelectItem>
                      {getBoards?.data?.map((model: any, idx: number) => (
                        <SelectItem value={model.Value.toString()} key={idx}>
                          {model.Label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>

                <FormItem>
                  <FormLabel>Modelo</FormLabel>
                  <Select
                    onValueChange={(e) => handleSelectChangeModel(e)}
                    value={model?.Value.toString()}
                    disabled={getModels.isSuccess !== true}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          getModels.isPending ? "Buscando Modelos" : "Selecione"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Selecione</SelectItem>
                      {getModels?.data?.map((model: any, idx: number) => (
                        <SelectItem value={model.Value.toString()} key={idx}>
                          {model.Label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>

                <div className="w-full flex gap-2">
                  <div>
                    <FormLabel>Ano</FormLabel>
                    <FormField
                      control={form.control}
                      name="ano_modelo_min"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="1970"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormLabel>Até</FormLabel>
                    <FormField
                      control={form.control}
                      name="ano_modelo_max"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="2025"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex gap-2 ">
                    <CustomInputValue
                      form={form}
                      label="R$"
                      name="preco"
                      placeholder="R$ 99.999.999"
                    />
                    <CustomInputValue
                      form={form}
                      label="R$"
                      name="preco"
                      placeholder="R$ 99.999.999"
                    />
                  </div>
                </div>
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
                  name="opcionais"
                  render={() => (
                    <FormItem>
                      <FormLabel>Opcionais</FormLabel>
                      {getOptionals.data?.map((item: iOptional) => (
                        <FormField
                          key={item.nome}
                          control={form.control}
                          name="opcionais"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.nome}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.nome)}
                                    onCheckedChange={(checked) => {
                                      const currentItems =
                                        form.getValues("opcionais") || [];
                                      if (checked) {
                                        form.setValue("opcionais", [
                                          ...currentItems,
                                          item.nome,
                                        ]);
                                      } else
                                        form.setValue(
                                          "opcionais",
                                          currentItems.filter(
                                            (value) => value !== item.nome
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
                <Button type="submit" variant={"default"}>
                  Buscar
                </Button>
                <Button
                  type="button"
                  variant={"link"}
                  onClick={() => form.reset()}
                >
                  Limpar
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="w-full min-h-full">
          <Card className="w-full min-h-screen">
            <CardHeader>
              <CardTitle>Resultados</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-6 gap-7">
              {getAdverts.status === "pending" &&
                Array.from({ length: 20 }).map((_, index) => (
                  <Skeleton className="h-4 w-full" key={index} />
                ))}
              {getAdverts.data && getAdverts.data.adverts.length === 0 && (
                <span className="m-auto text-sm text-muted-foreground">
                  Nenhum anúncio encontrado
                </span>
              )}
              {getAdverts.data &&
                getAdverts.data.adverts.map((advert) => {
                  return <CardAdvert data={advert} key={advert.id} />;
                })}
            </CardContent>
            <CardFooter className="aqui"></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
