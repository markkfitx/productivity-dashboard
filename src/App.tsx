
import {Home, Profile, Login} from './config/pages'
import { createBrowserRouter, Link , Navigate, RouterProvider} from 'react-router-dom';
import type { JSX } from 'react';
import DashboardLayout from './components/DashboardLayout';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = false; // Replace with your auth check (token, context, etc.)
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
const router = createBrowserRouter([
  {
    element: <DashboardLayout />, // All dashboard pages go here
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  {
    path: "/login", // Login is outside DashboardLayout
    element: <Login />,
  },
  {
    path: "*",
    element: <div>404 Page not found</div>,
  },
])
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
