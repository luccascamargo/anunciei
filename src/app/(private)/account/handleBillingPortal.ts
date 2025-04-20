"use server";

import { apiClient } from "@/lib/utils";

interface iHandleBillingPortal {
  result?: string;
  error: boolean;
}

export const HandleBillingPortal = async (
  returnUrl: string
): Promise<iHandleBillingPortal> => {
  try {
    const { data } = await apiClient.post("/stripe/portal", {
      params: {
        returnUrl,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return { result: data.url, error: false };
  } catch (error) {
    console.log(error);
    return { error: true };
  }
};
