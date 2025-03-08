import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/core/AppSidebar"
import { Outlet } from "react-router-dom"
import AppHeader from "@/components/core/AppHeader"
export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 pt-12 lg:px-8">
        {/* <SidebarTrigger /> */}
        <AppHeader/>
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
