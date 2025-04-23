"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { CircleUserRound, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
    <div className="w-screen py-6 md:py-4 border-b">
      <Wrapper>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-end gap-4">
            <Link href="/">
              <Image src={"/anunciei.svg"} width={52} height={37} alt="Logo" />
            </Link>
            <div className="hidden ml-7 md:flex items-center justify-center gap-12">
              <Link href="/">Home</Link>
              <Link href="/stock/carros">Buscar</Link>
              <Link href="/pricing">Preços</Link>
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
              <div className="flex items-center gap-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer">
                    <CircleUserRound />
                    <span className="text-sm">
                      {user?.name} {user?.lastname}
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Minhas configurações</DropdownMenuLabel>
                    <Link href="/account">
                      <DropdownMenuItem className="cursor-pointer">
                        Meu perfil
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/advert/create">
                      <DropdownMenuItem className="cursor-pointer">
                        Criar anúncio
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/account/ads">
                      <DropdownMenuItem className="cursor-pointer">
                        Meus anúncios
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/favorites">
                      <DropdownMenuItem className="cursor-pointer">
                        Meus favoritos
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem
                      className="cursor-pointer text-red-700 hover:text-red-700"
                      onClick={SignOut}
                    >
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
            {!user && (
              <div className="flex items-center gap-6">
                <Link href="/signin">
                  <Button variant={"link"}>Entrar</Button>
                </Link>
                <Link href="/register">
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
                  <Link href="/stock/carros">Buscar</Link>
                  <Link href="/pricing">Preços</Link>
                  {user && (
                    <>
                      <Link href="/account" onClick={() => setIsOpen(false)}>
                        Meu perfil
                      </Link>
                      <Link
                        href="/advert/create"
                        onClick={() => setIsOpen(false)}
                      >
                        Criar anúncio
                      </Link>
                      <Link
                        href="/account/ads"
                        onClick={() => setIsOpen(false)}
                      >
                        Meus anúncios
                      </Link>
                      <Link href="/favorites" onClick={() => setIsOpen(false)}>
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
                      <Link href="/signin">
                        <Button variant={"link"}>Entrar</Button>
                      </Link>
                      <Link href="/register">
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
