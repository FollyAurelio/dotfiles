import * as React from "react"
import { type Icon } from "@tabler/icons-react"
import {
  LucideHome,
  LucideText,
  LucideClipboardList,
  LucideFolders,
  Hammer,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavUser } from "@/components/sidebar/nav-user"
import "@/components/sidebar/app-sidebar.css"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

import { useAuth } from "@/context/auth-context"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { user } = useAuth();

  const data = {
    user: {
      id: user?.id || -1,
      name: user?.name || "Guest",
      email: user?.email || "guest@make-it-all.co.uk",
      avatar: user?.avatar || "/avatars/default.jpg",
      permission: user?.permission || "Employee",
    },
    navMain: [
      { title: "Dashboard", url: "/dashboard", icon: LucideHome as Icon},
      { title: "Forums", url: "/dashboard/forum", icon: LucideText as Icon },
      { title: "To-do List", url: "/dashboard/todo", icon: LucideClipboardList as Icon },
      { title: "Projects", url: "/dashboard/projects", icon: LucideFolders as Icon },
    ],
  };
    
  
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="p-6 ">
        <div className="flex items-center space-x-2 logo font-[500] text-[24px] flex h-[25px] w-60">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <Hammer className="size-4" />
          </div>
          <h1 className='headerfont font ml-[2px] mr-[2px] mb-0 text-center' style={{ fontSize: "1.1em", fontFamily: "Zodiak-Variable" }}>Make it all.</h1>
          {/* <img src="/assets/hardwareicon.png" className='w-6 h-6 mb-0' /> */}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>

  )
}
