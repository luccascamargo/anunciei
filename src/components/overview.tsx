"use client";

import { useAuth } from "@/hooks/useAuth";
import { apiClient } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function Overview() {
  const { user } = useAuth();

  const { data, isFetching } = useQuery({
    enabled: !!user,
    queryKey: ["stats-over-time", user?.id],
    queryFn: async () => {
      const response = await apiClient.get("/adverts/stats/over-time");
      return response.data;
    },
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-muted-foreground">Carregando...</span>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-md">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Visualizações
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[0].value?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Contatos
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[1].value?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Line
          type="monotone"
          dataKey="visualizacoes"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="contatos"
          stroke="#82ca9d"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="favoritados"
          stroke="#ffc658"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
