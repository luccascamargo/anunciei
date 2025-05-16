"use client";

import * as React from "react";
import {
  ChartSpline,
  CreditCard,
  Folder,
  Sparkles,
  UserCog,
} from "lucide-react";

import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import Link from "next/link";
import { NavLinks } from "./nav-links";
import { useAuth } from "@/hooks/useAuth";

const data = {
  links: [
    {
      name: "Estatísticas",
      url: "/estatisticas",
      icon: ChartSpline,
      icon_plus: Sparkles,
      its_protected: true,
    },
    {
      name: "Minha Conta",
      url: "/conta",
      icon: UserCog,
      its_protected: false,
    },
    {
      name: "Meus anúncios",
      url: "/conta/anuncios/ativos",
      icon: Folder,
      its_protected: false,
      items: [
        { url: "/conta/anuncios/ativos", label: "Ativos" },
        { url: "/conta/anuncios/inativos", label: "Inativos" },
        { url: "/conta/anuncios/pendentes", label: "Pendentes" },
      ],
    },
    {
      name: "Assinaturas",
      url: "/assinaturas",
      icon: CreditCard,
      its_protected: false,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavLinks links={data.links} />
      </SidebarContent>
      <SidebarFooter>
        <Button
          className="w-full"
          disabled={
            user && user._count.adverts >= 3 && user.plan === "FREE"
              ? true
              : user && user._count.adverts >= 10 && user.plan === "BASIC"
                ? true
                : false
          }
        >
          <Link href={"/anuncio/criar"}>Criar anúncio</Link>
        </Button>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
