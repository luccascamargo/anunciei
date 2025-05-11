/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, Eye, Search, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { apiClient } from "@/lib/utils";
import { Prisma, Status } from "@prisma/client";
import Image from "next/image";

type AdvertPreview = {
  data: {
    advert: Prisma.AdvertsGetPayload<{
      include: {
        images: true;
        brand: true;
        model: true;
        optionals: true;
        user: true;
      };
    }>;
  };
};

type Advert = {
  id: string;
  status: Status;
};

type AdPromise = {
  data: {
    data: Advert[];
    pagination: {
      page: number;
      total: number;
      nextPage: number;
    };
  };
};

export default function AdsPage() {
  const [page, setPage] = useState(1);
  const [previewAdId, setPreviewAdId] = useState(null);
  const pageSize = 20;

  const { data, isLoading, isError } = useQuery<AdPromise>({
    queryKey: ["ads", page, pageSize],
    queryFn: async () =>
      await apiClient.get("/adverts", { params: { page, take: pageSize } }),
  });

  const { data: previewAd, isLoading: isLoadingPreview } =
    useQuery<AdvertPreview>({
      queryKey: ["ad", previewAdId],
      queryFn: async () =>
        await apiClient.get(`/adverts/preview/${previewAdId}`),
      enabled: !!previewAdId,
    });

  const ads = data?.data.data || [];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Aprovado</Badge>
        );
      case "rejected":
        return <Badge variant="destructive">Rejeitado</Badge>;
      case "pending":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Pendente
          </Badge>
        );
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gerenciar Anúncios</h1>
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar por ID do anúncio..."
          className="w-full pl-8 md:max-w-sm"
          value={""}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: pageSize }).map((_, i) => (
                <TableRow key={`skeleton-${i}`}>
                  <TableCell>
                    <Skeleton className="h-5 w-[80px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-[150px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-[80px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </TableCell>
                </TableRow>
              ))
            ) : isError ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  Erro ao carregar anúncios. Tente novamente.
                </TableCell>
              </TableRow>
            ) : ads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  Nenhum anúncio encontrado.
                </TableCell>
              </TableRow>
            ) : (
              ads.map((ad: any) => (
                <TableRow key={ad.id}>
                  <TableCell className="font-medium">{ad.id}</TableCell>
                  <TableCell>{getStatusBadge(ad.status)}</TableCell>
                  <TableCell>
                    <Button
                      variant={"ghost"}
                      className="flex items-center gap-2"
                      onClick={() => setPreviewAdId(ad.id)}
                    >
                      <Eye className="h-4 w-4" />
                      <span>Ver Preview</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {data && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {!isLoading && !isError && ads.length > 0 && (
              <>
                Mostrando {(data.data.pagination.page - 1) * pageSize + 1} a{" "}
                {Math.min(
                  data.data.pagination.page * pageSize,
                  data.data.pagination.total
                )}{" "}
                de {data.data.pagination.total} anúncios
              </>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={isLoading || page <= 1}
            >
              Anterior
            </Button>
            <div className="text-sm font-medium">
              Página {data.data.pagination?.page} de{" "}
              {data.data.pagination?.nextPage || page}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setPage((p) =>
                  Math.min(p + 1, data.data.pagination?.total || 1)
                )
              }
              disabled={isLoading || !data.data.pagination?.nextPage}
            >
              Próximo
            </Button>
          </div>
        </div>
      )}

      {/* Modal de Preview */}
      <Dialog
        open={!!previewAdId}
        onOpenChange={(open) => !open && setPreviewAdId(null)}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Preview do Anúncio</DialogTitle>
          </DialogHeader>
          {isLoadingPreview && (
            <div className="space-y-4">
              <Skeleton className="h-[200px] w-full rounded-md" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-20 w-full" />
            </div>
          )}
          {!isLoadingPreview && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {previewAd?.data.advert.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img.url || "/placeholder.svg"}
                    width={80}
                    height={80}
                    alt="Preview do Anúncio"
                    className="object-cover"
                  />
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  {previewAd?.data.advert.brand.name}{" "}
                  {previewAd?.data.advert.model.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  ID: {previewAd?.data.advert.id} | Tipo:{" "}
                  {previewAd?.data.advert.type}
                </p>
                <p className="mt-2">{previewAd?.data.advert.description}</p>
              </div>
              {previewAd?.data.advert.status === "REQUESTED" && (
                <div className="flex justify-end gap-2">
                  <Button variant="outline" className="text-red-600">
                    <X className="mr-2 h-4 w-4" />
                    Rejeitar
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Check className="mr-2 h-4 w-4" />
                    Aprovar
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
