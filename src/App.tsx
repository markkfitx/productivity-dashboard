
import { createBrowserRouter, Link , RouterProvider} from 'react-router-dom';
import Main from './app/index';
import Profile from './app/HR/profile';
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
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
