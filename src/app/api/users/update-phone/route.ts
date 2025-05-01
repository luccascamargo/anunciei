import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/lib/auth";
import { z } from "zod";

const formSchema = z.object({
  phone: z.string().length(13),
});

export async function PATCH(request: NextRequest) {
  try {
    const formData = await request.formData();
    const formDataObject = Object.fromEntries(formData.entries());

    // Validação do formulário
    const validatedData = formSchema.parse(formDataObject);

    const token = request.cookies.get("accessToken")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "Token de autenticação não encontrado" },
        { status: 401 }
      );
    }
    const user_id = await verifyJwt(token);
    if (!user_id) {
      return NextResponse.json(
        { message: "Token de autenticação inválido" },
        { status: 401 }
      );
    }

    await prisma.user.update({
      where: {
        id: user_id,
      },
      data: {
        phone: validatedData.phone,
      },
    });

    return NextResponse.json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Dados inválidos", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
