"use client";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  seacrh: z.string(),
});

export function SearchBox() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      seacrh: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values.seacrh) return router.push("/stock/carros");
    return router.push(`/stock/carros?busca=${values.seacrh}`);
  }
  return (
    <div className="max-w-xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full items-center space-x-2"
        >
          <FormField
            control={form.control}
            name="seacrh"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="O que você está procurando? Ex: Honda Civic 2022"
                    className=" h-12"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="h-12 px-6" type="submit">
            <Search className="mr-2 h-4 w-4" />
            Buscar
          </Button>
        </form>
      </Form>
      <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-muted-foreground">
        <span>Buscas populares:</span>
        <Link
          href="/stock/carros/?busca=honda+civic"
          className="hover:text-primary hover:underline"
        >
          Honda Civic
        </Link>
        <Link
          href="/stock/carros/?busca=toyota+corolla"
          className="hover:text-primary hover:underline"
        >
          Toyota Corolla
        </Link>
        <Link
          href="/stock/carros/?busca=jeep+compass"
          className="hover:text-primary hover:underline"
        >
          Jeep Compass
        </Link>
        <Link
          href="/stock/carros/?busca=volkswagen+t-cross"
          className="hover:text-primary hover:underline"
        >
          Volkswagen T-Cross
        </Link>
      </div>
    </div>
  );
}
