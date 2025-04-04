export interface FilterAdverts {
  adverts: Advert[];
  total: number;
  page: number;
  totalPages: number;
}

export interface Modelo {
  nome: string;
}

export interface Marca {
  nome: string;
}

export interface Advert {
  id: string;
  tipo: string;
  marca: Marca;
  modelo: Modelo;
  ano_modelo: number;
  cor: string;
  cep: string;
  cidade: string;
  estado: string;
  preco: number;
  portas: string;
  quilometragem: number;
  descricao: string;
  placa: string;
  cambio: string;
  data_cricao: string;
  data_atualizacao: string;
  status: string;
  slug: string;
  destaque: boolean;
  usuario_id: string;
  imagens: Imagen[];
  opcionais: Opcionai[];
  usuario: Usuario;
}

export interface Imagen {
  url: string;
  id: string;
}

export interface Opcionai {
  id: string;
  nome: string;
}

export interface Usuario {
  id: string;
  nome: string;
  sobrenome: string;
  imagem: string | null;
  email: string;
  telefone: string | null;
  data_criacao: string;
  anuncios?: Advert[];
}
