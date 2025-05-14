"use client";

import { useState } from "react";
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
import { useQuery } from "@tanstack/react-query";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ArrowUpDown, Loader, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

type Advert = {
  id: string;
  price: number;
  status: "ACTIVE" | "INACTIVE" | "REQUESTED";
  created_at: string;
  model: string;
  brand: string;
  slug: string;
  type: string;
};

type ModelRow = {
  name: string;
};

type BrandRow = {
  name: string;
};

export const columns: ColumnDef<Advert>[] = [
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "model",
    header: "Modelo",
    cell: ({ row }) => {
      const model: ModelRow = row.getValue("model");
      return <div>{model.name}</div>;
    },
  },
  {
    accessorKey: "brand",
    header: "Marca",
    cell: ({ row }) => {
      const brand: BrandRow = row.getValue("brand");
      return <div>{brand.name}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const label = row.getValue("status");
      if (label === "ACTIVE") {
        return <div className="text-green-500 font-semibold">Ativo</div>;
      }
      if (label === "INACTIVE") {
        return <div className="text-red-500 font-semibold">Inativo</div>;
      }
      if (label === "REQUESTED") {
        return <div className="text-yellow-500 font-semibold">Solicitado</div>;
      }

      return <div>Desconhecido</div>;
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data de criação
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      const formattedDate = new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(date);

      return <div className="ml-4">{formattedDate}</div>;
    },
  },

  {
    accessorKey: "price",
    header: () => <div>Preço</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);

      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div>Ações</div>,
    cell: ({ row }) => {
      const advert = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={`/estatisticas/${advert.slug}`} target="_blank">
                Ver estatísticas
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={`/anuncio/${advert.slug}`} target="_blank">
                Ver anúncio
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export function TableStats() {
  const { user } = useAuth();
  const { data, isFetching } = useQuery<Advert[]>({
    enabled: !!user,
    queryKey: ["adverts", user?.id],
    queryFn: async () => {
      const response = await apiClient.get("/adverts/stats/all-adverts");
      return response.data;
    },
    refetchOnWindowFocus: true,
    staleTime: 5000,
  });

  if (isFetching) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
