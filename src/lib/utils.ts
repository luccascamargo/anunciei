import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface StatesProps {
  nome: string;
  id: number;
}

interface CityProps {
  nome: string;
  id: number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeText(text: string): string {
  return text
    .normalize("NFD") // Decompõe os caracteres acentuados em caracteres base + acento
    .replace(/[\u0300-\u036f]/g, ""); // Remove os acentos
}

export async function GetStates() {
  const states: StatesProps[] = [];
  const response = await fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "GET",
      cache: "force-cache",
    }
  );
  const res = await response.json();

  res.map((state: StatesProps) =>
    states.push({ id: state.id, nome: state.nome })
  );

  return states;
}

export async function GetCities(id: string) {
  const cities: CityProps[] = [];
  const response = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "GET",
      cache: "force-cache",
    }
  );
  const res = await response.json();

  res.map((city: CityProps) => cities.push({ id: city.id, nome: city.nome }));

  return cities;
}

export async function api(url: string, options?: RequestInit) {
  if (!process.env.NEXT_PUBLIC_SERVER_URL) {
    throw new Error("URL base da API não está configurada.");
  }

  const headers = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, {
      ...options,
      headers,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        `Erro na requisição: ${res.status} - ${
          errorData?.message || "Erro desconhecido"
        }`
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Requisição excedeu o tempo limite.");
    }
    throw error;
  }
}

export async function apiFormData(
  url: string,
  formData: FormData,
  options?: RequestInit
) {
  if (!process.env.NEXT_PUBLIC_SERVER_URL) {
    throw new Error("URL base da API não está configurada.");
  }

  const headers = {
    ...options?.headers,
  };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, {
      ...options,
      headers,
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        `Erro na requisição: ${res.status} - ${
          errorData?.message || "Erro desconhecido"
        }`
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Requisição excedeu o tempo limite.");
    }
    throw error;
  }
}

export const colors = [
  {
    name: "Branco",
    code: "branco",
  },
  {
    name: "Preto",
    code: "preto",
  },
  {
    name: "Vermelho",
    code: "vermelho",
  },
  {
    name: "Azul",
    code: "azul",
  },
  {
    name: "Amarelo",
    code: "amarelo",
  },
  {
    name: "Cinza",
    code: "cinza",
  },
  {
    name: "Verde",
    code: "verde",
  },
  {
    name: "Laranja",
    code: "laranja",
  },
  {
    name: "Dourado",
    code: "dourado",
  },
  {
    name: "Marrom",
    code: "marrom",
  },
  {
    name: "Rosa",
    code: "rosa",
  },
  {
    name: "Roxo",
    code: "roxo",
  },
  {
    name: "Vinho",
    code: "vinho",
  },
  {
    name: "Indefinida",
    code: "indefinida",
  },
];
