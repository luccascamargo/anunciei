"use client";

import { Avatar } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { apiClient } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

type Advert = {
  id: string;
  view_count: number;
  model: string;
  brand: string;
  year_model: number;
  contact_count: number;
  conversion_rate: number;
};

type Props = {
  startDate: string | null;
  endDate: string | null;
};

export function TopVehicles({ endDate, startDate }: Props) {
  const { user } = useAuth();
  const { data, isFetching } = useQuery<Advert[]>({
    enabled: !!user,
    queryKey: ["adverts", user?.id, startDate, endDate],
    queryFn: async () => {
      const response = await apiClient.get("/adverts/stats/top-vehicles", {
        params: {
          start: startDate,
          end: endDate,
        },
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  if (isFetching) {
    return (
      <div className="flex h- w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  return (
    <div className="space-y-8">
      {data?.map((advert) => (
        <div className="flex items-center" key={advert.id}>
          <Avatar className="h-9 w-9">
            {advert.brand[0]}
            {advert.model[0]}
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {advert.model} - {advert.brand} - {advert.year_model}
            </p>
            <p className="text-sm text-muted-foreground">
              CTR: {advert.conversion_rate}% | Contatos: {advert.contact_count}
            </p>
          </div>
          <div className="ml-auto font-medium">{advert.view_count} views</div>
        </div>
      ))}
    </div>
  );
}
