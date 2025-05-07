"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useMask } from "@react-input/mask";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
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
});

const options = {
  mask: "+55 (__) _____-____",
  replacement: { _: /\d/ },
};

export function UpdatePhone() {
  const inputRef = useMask(options);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    handleRegisterPhone.mutate(values);
  }

  const handleRegisterPhone = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const formdata = new FormData();

      formdata.append("phone", values.phone.replace(/\D/g, ""));

      await apiClient.patch("/users/update-phone", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      toast("Alterações concluidas com sucesso!");
      router.refresh();
    },
    onError: () => {
      toast("Não foi possível realizar esta ação, tente novamente mais tarde.");
    },
    onMutate: () => {
      toast("Salvando informações...");
      form.reset();
    },
  });

  return (
    <div className="fixed p-6 flex items-center justify-center w-screen h-screen top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-primary/20 rounded-lg border border-gray-200">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-5 bg-white p-6 rounded-md w-full md:w-[400px]"
        >
          <span className="text-sm font-bold">Informe seu telefone.</span>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone:</FormLabel>
                <FormControl>
                  <Input placeholder="Telefone" {...field} ref={inputRef} />
                </FormControl>
                <FormDescription>Ex: (00) 0 0000-0000</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            variant={"outline"}
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            {form.formState.isSubmitting ? "Salvando informações" : "Salvar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
