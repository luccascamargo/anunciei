"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { CircleUserRound } from "lucide-react";
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

export function Navbar() {
  const { user } = useAuth();
  return (
    <div className="w-screen py-6 ">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/">
              {/* <Image src={"/appgarage.png"} width={50} height={50} alt="" /> */}
              appgarage
            </Link>
            <Link href="/">Home</Link>
            <Link href="/pricing">Preços</Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5">
              {user && <Badge variant="default">{user?.plano}</Badge>}
              {user && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer">
                    <CircleUserRound />
                    <span className="text-sm">
                      {user?.nome} {user?.sobrenome}
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Minhas configurações</DropdownMenuLabel>
                    <Link href="/account">
                      <DropdownMenuItem className="cursor-pointer">
                        Meu perfil
                      </DropdownMenuItem>
                    </Link>
                    <>
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
                    </>

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
              )}
            </div>
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
        </div>
      </Wrapper>
    </div>
  );
}
