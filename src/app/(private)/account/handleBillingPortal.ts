"use server";

import { apiClient } from "@/lib/utils";

interface iHandleBillingPortal {
  result?: string;
  error: boolean;
}

export const HandleBillingPortal = async ({
  id,
}: {
  id: string;
}): Promise<iHandleBillingPortal> => {
  try {
    const { data } = await apiClient.post("/stripe/portal", {
      headers: {
        "Content-Type": "application/json",
      },
      data: { id },
    });

    return { result: data.url, error: false };
  } catch (error) {
    console.log(error);
    return { error: true };
  }
};
