"use server";

import { ContactTemplate } from "@/components/contactTemplate";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Definindo o schema de validação com Zod
const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  type: z.enum(["question", "feedback", "support"], {
    required_error: "Selecione um tipo de contato",
  }),
  subject: z.string().min(1, { message: "Selecione um assunto" }),
  phone: z.string().refine(
    (value) => {
      const regex =
        /^\+([1-9]{1,4})\s?(\(?\d{1,4}\)?\s?)?(\d{4,5})[-\s]?\d{4}$/;
      return regex.test(value);
    },
    {
      message:
        "Número de telefone inválido. Utilize o formato internacional, por exemplo: 54 91234-5678",
    }
  ),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    type?: string[];
    subject?: string[];
    phone?: string[];
    message?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
) {
  // Extrair dados do formulário
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    type: formData.get("type"),
    subject: formData.get("subject"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  // Validar dados com Zod
  const validatedFields = contactFormSchema.safeParse(rawFormData);

  // Se a validação falhar, retornar erros
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Formulário inválido. Por favor, corrija os erros abaixo.",
      success: false,
    };
  }

  // Dados validados
  const { name, email, type, subject, phone, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: "Anuncie.app - Contato <onboarding@resend.dev>",
      to: ["lucascamargo.dev@gmail.com"],
      subject: "Olá, temos um contato vindo do site Anuncie.app",
      react: await ContactTemplate({
        name,
        email,
        message,
        phone,
        subject,
        type,
      }),
    });

    // Retornar sucesso
    return {
      errors: {},
      message: "Mensagem enviada com sucesso!",
      success: true,
    };
  } catch (error) {
    // Tratar erros
    return {
      errors: {},
      message:
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao enviar o formulário.",
      success: false,
    };
  }
}
