import type { JSX, ReactElement } from "react"
import {Home, Inbox, Settings, User} from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"

type NavItemProps = {
  label: string
  path: string
  icon?: string // <-- now just a string
  active?: boolean
}

const iconMap = {
  home: <Home className="h-[1rem] w-[1rem] me-2" />,
  inbox: <Inbox />,
  settings: <Settings />,
  user: <User />
};

const NavItem = ({ label, path, icon, active }: NavItemProps) => {
  return (
    <a href={path} className={`${active ? "active" : ""}`}>
      {icon && iconMap[icon as keyof typeof iconMap]}
      <span>{label}</span>
    </a>
  )
}

export default NavItem