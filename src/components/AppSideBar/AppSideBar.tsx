import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { items } from "./items";
import { useLogOut } from "@/lib/User/hooks/useLogOutHook";
import ZustandPrincipal from "@/lib/ZustandPrincipal";
import { Button } from "../ui/button";
import { LogOut, User } from "lucide-react";
import { images } from "@/lib/images";

export function AppSidebar() {
  const navigate = useNavigate();
  const { logOut } = useLogOut();
  const { opcionMenu, setOpcionMenu } = ZustandPrincipal();

  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <img src={images.logo} className="w-[50px] w-[50px]" alt="" />
          {/* <SidebarGroupLabel>AVT</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`cursor-pointer ${
                      opcionMenu == item.url ? "text-accion hover:accion " : ""
                    }}`}
                  >
                    <div
                      onClick={() => {
                        navigate(item.url);
                        setOpcionMenu(item.url);
                      }}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Josue Díaz</span>
                <span className="text-xs text-muted-foreground">
                  Administrador
                </span>
              </div>
            </div>
            <Button
              variant="destructive"
              className="w-full flex items-center gap-2"
              onClick={() => {
                logOut();
              }}
            >
              <LogOut className="h-4 w-4" />
              Cerrar sesión
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
