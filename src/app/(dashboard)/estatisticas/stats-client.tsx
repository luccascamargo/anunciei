"use client";
import { Overview } from "@/components/overview";
import { TableStats } from "@/components/table-stats";
import { TopVehicles } from "@/components/top-vehicles";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apiClient, cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, LineChart, Loader2 } from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

export function StatsClient() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(new Date().setDate(new Date().getDate() - 15)),
    to: new Date(new Date().setHours(23, 59, 59, 999)),
  });

  const formatDateForBackend = (date: Date | undefined) => {
    return date ? date.toISOString() : null;
  };

  const formattedDateRange = {
    from: formatDateForBackend(date?.from),
    to: formatDateForBackend(date?.to),
  };
  // Define o intervalo de datas como um estado local
  const defaultStartDate = formattedDateRange.from;
  const defaultEndDate = formattedDateRange.to;

  const { data, isPending } = useQuery({
    queryKey: ["stats", defaultStartDate, defaultEndDate], // Adicione dependências estáticas
    queryFn: async () => {
      const response = await apiClient.get("/adverts/stats", {
        params: {
          start: defaultStartDate,
          end: defaultEndDate,
        },
      });
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // Cache por 5 minutos
    refetchOnWindowFocus: false, // Evita refetch ao focar na janela
  });

  if (isPending) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Tabs defaultValue="geral" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="geral">Visão Geral</TabsTrigger>
            <TabsTrigger value="anuncios">Anúncios</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="grid gap-2 w-full">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "dd/MM/yyyy", { locale: ptBR })} -{" "}
                          {format(date.to, "dd/MM/yyyy", { locale: ptBR })}
                        </>
                      ) : (
                        format(date.from, "dd/MM/yyyy", { locale: ptBR })
                      )
                    ) : (
                      <span>Selecione um período</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                    locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <TabsContent value="geral" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Visualizações
                </CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.totalViews}</div>
                <p className="text-xs text-muted-foreground">
                  {data.viewsChange} em relação ao período anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CTR</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.conversionRate}</div>
                <p className="text-xs text-muted-foreground">
                  {data.conversionRateChange} em relação ao período anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Contatos</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.totalContacts}</div>
                <p className="text-xs text-muted-foreground">
                  {data.contactsChange} em relação ao período anterior
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Desempenho ao Longo do Tempo</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Veículos Mais Populares</CardTitle>
                <CardDescription>
                  Os 5 veículos com mais interações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TopVehicles />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="anuncios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Todos os Anúncios</CardTitle>
              <CardDescription>
                Visualize e gerencie todos os seus anúncios de veículos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TableStats />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
