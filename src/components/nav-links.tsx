"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export function NavLinks({
  links,
}: {
  links: {
    name: string;
    url: string;
    icon: LucideIcon;
    its_protected: boolean;
    icon_plus?: LucideIcon;
  }[];
}) {
  const router = useRouter();
  const { user } = useAuth();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {links.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              disabled={
                user && user.plan === "FREE" && item.its_protected
                  ? true
                  : false
              }
              onClick={() => router.push(item.url)}
              className="cursor-pointer"
            >
              <item.icon />
              <span>{item.name}</span>
              {item.icon_plus && <item.icon_plus className="mr-2" />}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
