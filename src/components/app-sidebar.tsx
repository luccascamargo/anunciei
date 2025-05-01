"use client";

import * as React from "react";
import { ChartSpline, CreditCard, Folder, UserCog } from "lucide-react";

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

const data = {
  links: [
    {
      name: "Estatísticas",
      url: "/estatisticas",
      icon: ChartSpline,
    },
    {
      name: "Minha Conta",
      url: "/conta",
      icon: UserCog,
    },
    {
      name: "Meus anúncios",
      url: "/conta/anuncios",
      icon: Folder,
    },
    {
      name: "Assinaturas",
      url: "/assinaturas",
      icon: CreditCard,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavLinks links={data.links} />
      </SidebarContent>
      <SidebarFooter>
        <Button>
          <Link href={"/anuncio/criar"}>Criar anúncio</Link>
        </Button>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
