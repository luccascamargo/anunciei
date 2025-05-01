"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Badge } from "./ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { Wrapper } from "./wrapper";
import { SignOut } from "@/app/(public)/(auth)/signout";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { user } = useAuth();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <div className="w-full py-6 md:py-4 border-b">
      <Wrapper>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-end gap-4">
            <Link href="/">
              <Image src={"/anunciei.svg"} width={52} height={37} alt="Logo" />
            </Link>
            <div className="hidden ml-7 md:flex items-center justify-center gap-12">
              <Link href="/">Home</Link>
              <Link href="/estoque/carros">Buscar</Link>
              <Link href="/planos">planos</Link>
              <Link href="/contato">Contato</Link>
            </div>
          </div>

          {/* Ações do Usuário */}
          <div className="hidden md:flex items-center gap-6">
            {user && user.plan === "FREE" && (
              <Badge className="bg-accent text-black hover:bg-accent">
                Grátis
              </Badge>
            )}
            {user && user.plan === "BASIC" && <Badge>Básico</Badge>}
            {user && user.plan === "PRO" && <Badge>Pro</Badge>}
            {user && (
              <Button variant={"outline"} asChild>
                <Link href="/painel">Administração</Link>
              </Button>
            )}
            {!user && (
              <div className="flex items-center gap-6">
                <Link href="/entrar">
                  <Button variant={"link"}>Entrar</Button>
                </Link>
                <Link href="/registrar">
                  <Button variant={"default"}>Crie sua conta</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Menu Mobile */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={() => setIsOpen((old) => !old)}>
              <SheetTrigger asChild>
                <Menu size={28} />
              </SheetTrigger>
              <SheetContent side="left" className="w-fit px-5">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-4 flex flex-col items-start gap-4">
                  <Link href="/">Home</Link>
                  <Link href="/estoque/carros">Buscar</Link>
                  <Link href="/planos">planos</Link>
                  {user && (
                    <>
                      <Link href="/conta" onClick={() => setIsOpen(false)}>
                        Meu perfil
                      </Link>
                      <Link
                        href="/anuncio/criar"
                        onClick={() => setIsOpen(false)}
                      >
                        Criar anúncio
                      </Link>
                      <Link
                        href="/conta/anuncios"
                        onClick={() => setIsOpen(false)}
                      >
                        Meus anúncios
                      </Link>
                      <Link href="/favoritos" onClick={() => setIsOpen(false)}>
                        Meus favoritos
                      </Link>
                      <button
                        onClick={SignOut}
                        className="text-red-700 hover:text-red-800"
                      >
                        Sair
                      </button>
                    </>
                  )}
                </div>
                <SheetFooter className="w-full flex flex-row items-end">
                  {!user && (
                    <>
                      <Link href="/entrar">
                        <Button variant={"link"}>Entrar</Button>
                      </Link>
                      <Link href="/registrar">
                        <Button variant={"default"}>Crie sua conta</Button>
                      </Link>
                    </>
                  )}
                  {user && (
                    <>
                      <span>
                        {user.name} {user.lastname}
                      </span>
                      <Badge variant="default">{user.plan}</Badge>
                    </>
                  )}
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
