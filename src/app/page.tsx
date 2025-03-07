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
import { PriceInput } from "@/components/priceInput";
import { QuilometerInput } from "@/components/quilometerInput";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { CardAdvert } from "@/components/cardAdvert";
import { api, GetCities, GetStates, normalizeText } from "@/lib/utils";
import { FilterAdverts } from "@/types/FilterAdverts";

export interface iTypes {
  value: number;
  name: string;
}

const formSchema = z.object({
  marca: z.string().optional(),
  modelo: z.string().optional(),
  busca: z.string().optional(),
  estado: z.string().optional(),
  cidade: z.string().optional(),
  ano_modelo_min: z.coerce
    .string()
    .optional()
    .transform((value) => value?.toString()),
  ano_modelo_max: z.coerce
    .string()
    .optional()
    .transform((value) => value?.toString()),
  quilometragem_min: z
    .string()
    .transform((val) => (Number(val) * 100).toString())
    .optional(),
  tipo: z.string(),
  quilometragem_max: z
    .string()
    .transform((val) => (Number(val) * 100).toString())
    .optional(),
  portas: z.string().optional(),
  preco_min: z.number().optional(),
  preco_max: z.number().optional(),
  opcionais: z.array(z.string().optional()).optional(),
});

interface iOptional {
  id: string;
  nome: string;
}

export default function Filter() {
  const [page, setPage] = useState(0);
  const [apiUrl, setApiUrl] = useState("http://localhost:8080/adverts/filter");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
      preco_max: 0,
      preco_min: 0,
    },
  });

  async function fetchAdverts(url: string): Promise<FilterAdverts> {
    console.log(url);
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
    mutationFn: async (type: number) => {
      return await api(`/fipe/brands/${type}`);
    },
  });

  const getModels = useMutation({
    mutationKey: ["getModels"],
    mutationFn: async ({ type, board }: { type: number; board: string }) => {
      return await api(`/fipe/models/${type}/${board}`);
    },
  });

  useEffect(() => {
    const value = form.watch("tipo");
    if (value) {
      const type = value === "carros" ? 1 : value === "motos" ? 2 : 3;
      getBoards.mutate(type);
    }
  }, [form.watch("tipo")]);

  useEffect(() => {
    const type = form.watch("tipo");
    const board = form.watch("marca");
    if (type && board) {
      const typeFormat = type === "carros" ? 1 : type === "motos" ? 2 : 3;
      getModels.mutate({ type: typeFormat, board });
    }
  }, [form.watch("marca")]);

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
                          <Input
                            placeholder="Audi, Gol..."
                            type="text"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full flex gap-2 ">
                  <PriceInput
                    form={form}
                    label="Valor"
                    name="preco_min"
                    placeholder="R$"
                  />
                  <PriceInput
                    form={form}
                    label="Até"
                    name="preco_max"
                    placeholder="R$"
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
                          disabled={getBoards.isSuccess !== true}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder={
                                getBoards.isPending
                                  ? "Buscando Marcas"
                                  : "Selecione"
                              }
                              ref={field.ref}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Selecione</SelectItem>
                            {getBoards.data?.map((brand: any, idx: number) => (
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
                            {getModels?.data?.map((model: any, idx: number) => (
                              <SelectItem value={model.Label} key={idx}>
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
                    <QuilometerInput
                      form={form}
                      label="Km"
                      name="quilometragem_min"
                      placeholder="0"
                    />
                    <QuilometerInput
                      form={form}
                      label="Até"
                      name="quilometragem_max"
                      placeholder="0"
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

