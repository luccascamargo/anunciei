"use server";

export async function getOptionals() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/optionals`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 }, // Cache por 1 hora
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar opcionais:", error);
    return [];
  }
}
