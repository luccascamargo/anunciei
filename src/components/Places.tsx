"use client";

import { useState, useEffect, useRef } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { normalizeText } from "@/lib/utils";

const libraries: "places"[] = ["places"];

// Lista de estados do Brasil
const estadosBrasil = [
  "Acre, AC",
  "Alagoas, AL",
  "Amapá, AP",
  "Amazonas, AM",
  "Bahia, BA",
  "Ceará, CE",
  "Distrito Federal, DF",
  "Espírito Santo, ES",
  "Goiás, GO",
  "Maranhão, MA",
  "Mato Grosso, MT",
  "Mato Grosso do Sul, MS",
  "Minas Gerais, MG",
  "Pará, PA",
  "Paraíba, PB",
  "Paraná, PR",
  "Pernambuco, PE",
  "Piauí, PI",
  "Rio de Janeiro, RJ",
  "Rio Grande do Norte, RN",
  "Rio Grande do Sul, RS",
  "Rondônia, RO",
  "Roraima, RR",
  "Santa Catarina, SC",
  "São Paulo, SP",
  "Sergipe, SE",
  "Tocantins, TO",
];

type PlacesProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
};

export default function Places({ form }: PlacesProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_PLACE_KEY || "",
    libraries,
  });

  const [termo, setTermo] = useState("");
  const [sugestoesEstados, setSugestoesEstados] = useState<string[]>([]);
  const [sugestoesCidades, setSugestoesCidades] = useState<string[]>([]);
  const [service, setService] =
    useState<google.maps.places.AutocompleteService | null>(null);
  const [open, setOpen] = useState(false);

  // Refs para o input e sugestões
  const inputRef = useRef<HTMLInputElement | null>(null);
  const suggestionsRef = useRef<HTMLDivElement | null>(null);

  // Inicializa o serviço de autocomplete do Google
  const handleInit = () => {
    if (window.google) {
      setService(new window.google.maps.places.AutocompleteService());
    }
  };

  // Busca sugestões ao digitar
  const handleInputChange = (valor: string) => {
    setTermo(valor);
    setOpen(true);

    // Filtrar estados pelo termo digitado
    const estadosFiltrados = estadosBrasil.filter((estado) =>
      normalizeText(estado)
        .toLowerCase()
        .includes(normalizeText(valor).toLowerCase())
    );
    setSugestoesEstados(estadosFiltrados);

    // Buscar cidades na API do Google
    if (valor.length > 1 && service) {
      service.getPlacePredictions(
        {
          input: valor,
          types: ["(cities)"], // Apenas cidades
          componentRestrictions: { country: "BR" }, // Brasil
        },
        (predictions) => {
          if (predictions) {
            const cidades = predictions.map((p) => p.description);
            setSugestoesCidades(cidades);
          } else {
            setSugestoesCidades([]);
          }
        }
      );
    } else {
      setSugestoesCidades([]);
    }
  };

  // Seleciona uma sugestão
  const handleSelect = (localidade: string) => {
    setTermo(localidade);
    setSugestoesEstados([]);
    setSugestoesCidades([]);
    setOpen(false);
    const localidadeStates = localidade.split(",");
    if (localidadeStates.length === 3) {
      form.setValue("cidade", localidadeStates[0].trim());
      form.setValue("estado", "");
    } else {
      form.setValue("estado", localidadeStates[0].trim());
      form.setValue("cidade", "");
    }
  };

  // Fecha as sugestões quando clicar fora do input ou lista
  const handleClickOutside = (event: MouseEvent) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const subscription = form.watch((values) => {
      if (values.localizacao === "") {
        setTermo(""); // Limpa o estado interno
        setSugestoesEstados([]);
        setSugestoesCidades([]);
        setOpen(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  useEffect(() => {
    // Sincroniza o estado interno com o valor do formulário
    const subscription = form.watch((values) => {
      if (values.localizacao !== termo) {
        setTermo(values.localizacao || ""); // Atualiza o estado interno
      }
    });

    return () => subscription.unsubscribe();
  }, [form, termo]);

  if (!isLoaded) return <p className="text-sm">Localizando...</p>;

  return (
    <div className="relative w-80" onFocus={handleInit}>
      <FormField
        control={form.control}
        name="localizacao"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Localização</FormLabel>
            <FormControl>
              <Input
                placeholder="Digite cidade ou estado..."
                type="text"
                onChange={(e) => {
                  const valor = e.target.value;
                  setTermo(valor); // Atualiza o estado interno
                  handleInputChange(valor); // Atualiza sugestões
                  field.onChange(valor); // Atualiza o valor no formulário
                }}
                value={termo} // Sincroniza o valor do input com o estado interno
                ref={inputRef}
              />
            </FormControl>
          </FormItem>
        )}
      />
      {open && (sugestoesEstados.length > 0 || sugestoesCidades.length > 0) && (
        <ScrollArea
          className="h-60 z-10 absolute w-full bg-white border mt-1 rounded-md shadow-lg"
          ref={suggestionsRef}
        >
          {/* Lista de Estados */}
          {sugestoesEstados.length > 0 && (
            <div className="p-2">
              <h3 className="font-medium text-sm">Estados</h3>
              <ul>
                {sugestoesEstados.map((estado, index) => (
                  <li
                    key={`estado-${index}`}
                    className="p-2 cursor-pointer rounded-md hover:bg-gray-200 text-xs"
                    onClick={() => handleSelect(estado)}
                  >
                    {estado}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lista de Cidades */}
          {sugestoesCidades.length > 0 && (
            <div className="p-2">
              <h3 className="font-medium text-sm">Cidades</h3>
              <ul>
                {sugestoesCidades.map((cidade, index) => (
                  <li
                    key={`cidade-${index}`}
                    className="p-2 cursor-pointer rounded-md hover:bg-gray-200 text-xs"
                    onClick={() => handleSelect(cidade)}
                  >
                    {cidade}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ScrollArea>
      )}
    </div>
  );
}
