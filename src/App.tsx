import { type ReactNode } from 'react'
import Navbar from './components/Navbar'
import AppSidebar from './components/AppSidebar'
import { ThemeProvider } from './components/providers/ThemeProvider'
import { SidebarProvider } from './components/ui/sidebar'
import Cookies from "js-cookie";
import PageContent from './app/content'

export default function App() {
  const sidebarState: string | undefined = Cookies.get("sidebar_state");
  const defaultOpen: boolean = sidebarState === "true";
 
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="w-full flex flex-col">
          <Navbar />
          <div className="pt-4 px-4"><PageContent/></div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}
