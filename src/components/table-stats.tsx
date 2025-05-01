"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/utils";

type Advert = {
  id: string;
  title: string;
  price: number;
  created_at: string;
};

export function TableStats() {
  const [adverts, setAdverts] = useState<Advert[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchAdverts = async (page: number) => {
    setLoading(true);
    try {
      const response = await apiClient.get("/adverts/stats/all-adverts", {
        params: { page, limit: 10 },
      });
      setAdverts(response.data.adverts);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Erro ao buscar anúncios:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdverts(page);
  }, [page]);

  return (
    <div className="space-y-4">
      <Table className="min-w-full border">
        <TableHeader>
          <TableRow>
            <TableHead className="px-4 py-2">Título</TableHead>
            <TableHead className="px-4 py-2">Preço</TableHead>
            <TableHead className="px-4 py-2">Data de Criação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-4">
                Carregando...
              </TableCell>
            </TableRow>
          ) : adverts.length > 0 ? (
            adverts.map((advert) => (
              <TableRow key={advert.id}>
                <TableCell className="px-4 py-2">{advert.title}</TableCell>
                <TableCell className="px-4 py-2">
                  R$ {advert.price.toFixed(2)}
                </TableCell>
                <TableCell className="px-4 py-2">
                  {new Date(advert.created_at).toLocaleDateString("pt-BR")}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-4">
                Nenhum anúncio encontrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Anterior
        </Button>
        <span>
          Página {page} de {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Próxima
        </Button>
      </div>
    </div>
  );
}
