"use client";

import { MoreHorizontal, type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type ItemsDropdown = {
  url: string;
  label: string;
};

export function NavLinks({
  links,
}: {
  links: {
    name: string;
    url: string;
    icon: LucideIcon;
    its_protected: boolean;
    icon_plus?: LucideIcon;
    items?: ItemsDropdown[];
  }[];
}) {
  const router = useRouter();
  const { user } = useAuth();
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {links.map((item) =>
          item.items ? (
            <DropdownMenu key={item.name}>
              <SidebarMenuItem>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer">
                    <item.icon />
                    {item.name} <MoreHorizontal className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                {item.items?.length ? (
                  <DropdownMenuContent
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                    className="min-w-56 rounded-lg"
                  >
                    {item.items.map((item) => (
                      <DropdownMenuItem
                        asChild
                        key={item.label}
                        className="cursor-pointer"
                      >
                        <a href={item.url}>{item.label}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                ) : null}
              </SidebarMenuItem>
            </DropdownMenu>
          ) : (
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
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
