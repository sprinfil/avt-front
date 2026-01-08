import { Navigate, Outlet } from "react-router-dom";
import { AppSidebar } from "../AppSideBar/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

export const DefaultLayout = () => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="mt-1" />
        <main className="py-1 pr-10 mt-10 w-full">
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
};
