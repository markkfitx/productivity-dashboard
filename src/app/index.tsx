import Cookies from 'node_modules/@types/js-cookie'
import Navbar from '../components/Navbar'
import AppSidebar from '../components/AppSidebar'
import { ThemeProvider } from '../components/providers/ThemeProvider'
import { SidebarProvider } from '../components/ui/sidebar'
import { createBrowserRouter, Link , RouterProvider} from 'react-router-dom';
import Main from '../app/index';
import Profile from '../app/HR/profile';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <div>404 Page not found</div>
  },
  {
    path: '/profile',
    element: <Profile />
  }
])

export default function index(){
    const sidebarState: string | undefined = Cookies.get("sidebar_state");
    const defaultOpen: boolean = sidebarState === "true";
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className="w-full flex flex-col">
            <Navbar />
            <div className="pt-4 px-4"><RouterProvider router={router} /></div>
          </main>
        </SidebarProvider>
      </ThemeProvider>
    )
}