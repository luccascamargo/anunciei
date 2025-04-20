import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

interface StatesProps {
  nome: string;
  sigla: string;
}

interface CityProps {
  nome: string;
  id: number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

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
    states.push({ sigla: state.sigla, nome: state.nome })
  );

  return states;
}

export async function GetCities(uf: string) {
  const cities: CityProps[] = [];
  const response = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
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
