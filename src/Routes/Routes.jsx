import {
  createBrowserRouter
} from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home"
import Menu from "../pages/Menu/Menu"
import Order from "../pages/Order/Order/Order"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import Dashboard from "../Layout/Dashboard"
import Cart from "../pages/Dashboard/Cart/Cart"


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/order/:category',
        element: <ProtectedRoute><Order /></ProtectedRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
   {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
])