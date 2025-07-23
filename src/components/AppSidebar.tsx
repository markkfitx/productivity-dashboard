import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import navData from "../../data/navigation.json"
import { ChevronUp, Link, User2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import {Home, Inbox, Settings, User} from "lucide-react"




export default function AppSidebar() {
    const iconMap = {
        home: <Home className="h-[1rem] w-[1rem] me-2" />,
        inbox: <Inbox />,
        settings: <Settings />,
        user: <User />
    };
    return (
        <Sidebar collapsible="icon" side="left" className="w-[250px]">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem >
                        <SidebarMenuButton asChild className="p-0">
                            <a href="/" className="flex items-center gap-2 p-0">
                                <img src="https://github.com/shadcn.png" className="w-[1rem] h-1rem]"/>
                                <span className="text-lg font-semibold">Mark Kirby</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator className="ms-0" />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                         <SidebarMenu>
                            {navData.navigation.map((item) => (
                                <SidebarMenuItem key={item.label}>
                                    <SidebarMenuButton asChild >
                                        <a href={item.path}>
                                            {item.icon && iconMap[item.icon as keyof typeof iconMap]}
                                            <span>{item.label}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                         </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarSeparator className="ms-0" />
            <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Logout
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="top" className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        </Sidebar>
    )
}