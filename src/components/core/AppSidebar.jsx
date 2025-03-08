import { NavLink } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import Logo from "@/assets/img/logo.svg"

const sidebarItems = [
  {
    title: "Shop",
    url: "/",
    icon: ()=>(<i className="icon-shop"></i>),
  },
  {
    title: "Stores",
    url: "/stores",
    icon: ()=>(<i className="icon-stores"></i>),
  },
  {
    title: "Author",
    url: "/author",
    icon: ()=>(<i className="icon-author"></i>),
  },
  {
    title: "Books",
    url: "/books",
    icon: ()=>(<i className="icon-books"></i>),
  },
  
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
      <div className="flex items-center gap-[10px]">
              <img src={Logo} alt="Book World" />
              <span className="text-lg"><b>Book</b> World</span>
            </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink className="sidebar-link" to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
