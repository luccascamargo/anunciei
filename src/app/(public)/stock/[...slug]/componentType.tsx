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
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { CardAdvert } from "@/components/cardAdvert";
import { apiClient, normalizeText } from "@/lib/utils";
import { CustomInputValue } from "@/components/customInputValue";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Places from "@/components/Places";
import { Opcionai } from "@/types/FilterAdverts";
import { useRouter, useSearchParams } from "next/navigation";

export interface iTypes {
  value: number;
  name: string;
}

const formSchemaFilter = z.object({
  marca: z.string(),
  modelo: z.string(),
  busca: z.string(),
  localizacao: z.string().transform((value) => {
    if (value) {
      const [locale] = value.split(",");
      return locale.trim();
    }
    return "";
  }),
  ano_modelo_min: z.coerce
    .string()

    .transform((value) => value?.toString()),
  ano_modelo_max: z.coerce.string().transform((value) => value?.toString()),
  quilometragem_min: z.string().transform((value) => value.replace(/\D/g, "")),
  tipo: z.string(),
  quilometragem_max: z.string().transform((value) => value.replace(/\D/g, "")),
  portas: z.string(),
  preco_min: z.string().transform((value) => value.replace(/\D/g, "")),
  preco_max: z.string().transform((value) => value.replace(/\D/g, "")),
  opcionais: z.array(z.string().optional()).optional(),
});

interface iOptional {
  id: string;
  nome: string;
}

interface IBrand {
  id: string;
  nome: string;
  slug: string;
}

const CarBrands = [
  { name: "Fiat", slug: "fiat", image: "/fiat.webp" },
  { name: "Ford", slug: "ford", image: "/ford.webp" },
  { name: "Chevrolet", slug: "gm-chevrolet", image: "/gm.webp" },
  { name: "Honda", slug: "honda", image: "/honda.webp" },
  { name: "Hyundai", slug: "hyundai", image: "/hyundai.webp" },
  { name: "Mitsubishi", slug: "mitsubishi", image: "/mitsubishi.webp" },
  { name: "Renault", slug: "renault", image: "/renault.webp" },
  { name: "Toyota", slug: "toyota", image: "/toyota.webp" },
  { name: "Volkswagen", slug: "vw-volkswagen", image: "/volks.webp" },
];

const MotorcycleBrands = [
  { name: "Bmw", slug: "bmw", image: "/bmw.webp" },
  { name: "Dafra", slug: "dafra", image: "/dafra.webp" },
  { name: "ducati", slug: "ducati", image: "/ducati.webp" },
  { name: "Honda", slug: "honda", image: "/honda-motocicletas.webp" },
  { name: "Harley", slug: "harley-davidson", image: "/harley.webp" },
  { name: "Kasinski", slug: "kasinski", image: "/kasinski.webp" },
  { name: "Kawasak", slug: "kawasaki", image: "/kawasak.webp" },
  { name: "Suzuki", slug: "suzuki", image: "/suzuki.webp" },
  { name: "Yamaha", slug: "yamaha", image: "/yamaha.webp" },
];

const TruckBrands = [
  { name: "Agrale", slug: "fiat", image: "/agrale.jpg" },
  { name: "GMC", slug: "gmc", image: "/gmc.webp" },
  { name: "Chevrolet", slug: "chevrolet", image: "/gm.webp" },
  {
    name: "Mercedez-benz",
    slug: "mercedes-benz",
    image: "/mercedes-benz.jpeg",
  },
  { name: "Scania", slug: "scania", image: "/scania.png" },
  { name: "Volvo", slug: "volvo", image: "/volvo.jpg" },
  { name: "Iveco", slug: "iveco", image: "/iveco.svg" },
  { name: "Daf", slug: "daf", image: "/daf.svg" },
  { name: "Volkswagen", slug: "vw-volkswagen", image: "/volks.webp" },
];

const handleBrands = {
  carros: CarBrands,
  motos: MotorcycleBrands,
  caminhoes: TruckBrands,
};

type ComponentTypeProps = "carros" | "motos" | "caminhoes";

export function ComponentType({ slug }: { slug: string }) {
  const [filters, setFilters] = useState({});
  const router = useRouter();

  const defaultValues = {
    portas: "",
    marca: "",
    modelo: "",
    tipo: slug,
    busca: "",
    opcionais: [],
    localizacao: "",
    ano_modelo_max: "",
    ano_modelo_min: "",
    quilometragem_max: "",
    quilometragem_min: "",
    preco_max: "",
    preco_min: "",
  };

  const form = useForm<z.infer<typeof formSchemaFilter>>({
    resolver: zodResolver(formSchemaFilter),
    defaultValues,
  });

  async function fetchAdverts({
    pageParam = 1,
    filters,
  }: {
    pageParam: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: any;
  }) {
    const limit = 5;
    const { data } = await apiClient.get(
      `/adverts/filter?${new URLSearchParams({
        limit: limit.toString(),
        pageParam: pageParam.toString(),
        ...filters,
      })}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  }

  function onSubmit(values: z.infer<typeof formSchemaFilter>) {
    if (values.ano_modelo_min > values.ano_modelo_max) {
      toast("O ano mínimo não pode ser maior que o ano máximo");
      return;
    }
    if (values.preco_min > values.preco_max) {
      toast("O valor mínimo não pode ser maior que o valor máximo");
      return;
    }
    if (values.quilometragem_min > values.quilometragem_max) {
      toast(
        "A quilometragem mínima não pode ser maior que a quilometragem máxima"
      );
      return;
    }

    if (values.busca) {
      values.busca = normalizeText(values.busca);
    }

    const newFilters: { [key: string]: string } = {};

    Object.entries(values).forEach(([key, value]) => {
      if (key === "opcionais" && Array.isArray(value)) {
        value = value.filter((item) => item !== "");
        if (value.length === 0) return;
      }
      if (value && value !== "" && value !== "default") {
        newFilters[key] = value.toString();
      }
    });

    setFilters(newFilters);
  }

  const { data: brands } = useQuery<IBrand[]>({
    queryKey: ["type"],
    queryFn: async () => {
      const { data } = await apiClient.get(`/fipe/brands/${slug}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    },
  });

  const [brandsFiltered, setBrandsFiltered] = useState<IBrand[]>([]);

  useEffect(() => {
    if (brands) {
      setBrandsFiltered(brands);
    }
  }, [brands]);

  const handleOtherBrands = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().trim();
    if (!brands) return; // Evita erro caso os dados ainda não tenham carregado

    setBrandsFiltered(
      value === ""
        ? brands
        : brands.filter((brand) => brand.nome.toLowerCase().includes(value))
    );
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

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["ads", filters],
    queryFn: ({ pageParam }) => fetchAdverts({ pageParam, filters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return (
    <div className="w-screen px-6 flex flex-col gap-8 max-w-[1920px] pt-10">
      <div className="flex gap-8">
        <Card className="w-[400px] h-fit">
          <CardHeader>
            <div className="mt-5 w-full flex items-center gap-3">
              <Button
                variant={slug === "carros" ? "default" : "outline"}
                disabled={slug === "carros"}
                onClick={() => router.push("/stock/carros")}
              >
                Carros
              </Button>
              <Button
                variant={slug === "motos" ? "default" : "outline"}
                disabled={slug === "motos"}
                onClick={() => router.push("/stock/motos")}
              >
                Motos
              </Button>
              <Button
                variant={slug === "caminhoes" ? "default" : "outline"}
                disabled={slug === "caminhoes"}
                onClick={() => router.push("/stock/caminhoes")}
              >
                Caminhões
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <Places form={form} />

                <div className="w-full flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="busca"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Buscar</FormLabel>
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
                    isPrice
                    label="R$"
                    name="preco_min"
                    placeholder="R$ 99.999.999"
                  />
                  <CustomInputValue
                    form={form}
                    isPrice
                    label="Até"
                    name="preco_max"
                    placeholder="R$ 99.999.999"
                  />
                </div>

                <div className="w-full flex flex-col gap-3 items-end">
                  <div className="w-full">
                    <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Marcas
                    </span>
                    <div className="w-full grid grid-cols-3 gap-2">
                      {handleBrands[slug as ComponentTypeProps].map(
                        (brand, idx) => (
                          <Link
                            key={idx}
                            href={`/stock/${slug}/${brand.slug}`}
                            className="w-full rounded-md border border-input py-3 shadow-xs flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all"
                          >
                            <Image
                              src={brand.image}
                              width={48}
                              height={48}
                              alt=""
                            />
                            <span className="text-xs font-medium leading-none text-center">
                              {brand.name}
                            </span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                  <Sheet>
                    <SheetTrigger className="flex items-center gap-2 cursor-pointer transition-all hover:underline">
                      outras marcas <ArrowUpRight size={20} />
                    </SheetTrigger>
                    <SheetContent
                      side="left"
                      className="flex flex-col items-center"
                    >
                      <SheetHeader className="w-full">
                        <SheetTitle>Selecione uma marca</SheetTitle>
                        <Input
                          placeholder="Busque por uma marca"
                          onChange={handleOtherBrands}
                        />
                      </SheetHeader>
                      <ScrollArea className="w-[98%] h-[90%] rounded-md border pb-10">
                        <div className="p-4 flex flex-col gap-4">
                          <span>Todas as marcas</span>
                          <div className="flex flex-col">
                            {brandsFiltered.map((brand, idx) => (
                              <Link
                                href={`/stock/${brand.slug}`}
                                key={idx}
                                className="text-sm hover:bg-accent py-2 pl-2"
                              >
                                {brand.nome}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </ScrollArea>
                    </SheetContent>
                  </Sheet>
                </div>

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
                      label="Km"
                      name="quilometragem_min"
                      placeholder=""
                    />
                    <CustomInputValue
                      form={form}
                      label="Até"
                      name="quilometragem_max"
                      placeholder=""
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
                <Button type="submit" variant={"outline"}>
                  Buscar
                </Button>
                <Button
                  type="button"
                  variant={"link"}
                  className="text-black"
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
            <CardContent className="grid grid-cols-5 gap-7">
              {status === "pending" ? (
                Array.from({ length: 24 }).map((_, index) => (
                  <Skeleton className="h-4 w-full" key={index} />
                ))
              ) : status === "error" ? (
                <p>Erro: {error.message}</p>
              ) : (
                <>
                  {data &&
                    data.pages.every((page) => page.data.length === 0) && (
                      <span className="m-auto text-sm text-muted-foreground">
                        Nenhum anúncio encontrado
                      </span>
                    )}
                  {data &&
                    data.pages
                      .flatMap((page) => page.data)
                      .map((advert, index) => {
                        return <CardAdvert data={advert} key={index} />;
                      })}
                </>
              )}
            </CardContent>
            <CardFooter className="w-full flex items-center justify-center mt-10">
              <div>
                <Button
                  variant={"outline"}
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
                >
                  {isFetchingNextPage
                    ? "Buscando..."
                    : hasNextPage
                    ? "Buscar mais..."
                    : "Não há mais nada para buscar"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
