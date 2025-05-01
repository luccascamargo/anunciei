"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    visualizacoes: 6000,
    contatos: 1800,
    favoritados: 2400,
  },
  {
    name: "Fev",
    visualizacoes: 7000,
    contatos: 2200,
    favoritados: 2800,
  },
  {
    name: "Mar",
    visualizacoes: 8000,
    contatos: 2600,
    favoritados: 3200,
  },
  {
    name: "Abr",
    visualizacoes: 10000,
    contatos: 3100,
    favoritados: 3800,
  },
  {
    name: "Mai",
    visualizacoes: 11000,
    contatos: 3500,
    favoritados: 4200,
  },
  {
    name: "Jun",
    visualizacoes: 12000,
    contatos: 3900,
    favoritados: 4600,
  },
  {
    name: "Jul",
    visualizacoes: 15000,
    contatos: 4300,
    favoritados: 5000,
  },
];

export function Overview() {
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
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Favoritados
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[2].value?.toLocaleString()}
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
