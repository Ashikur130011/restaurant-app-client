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
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers"
import AddItems from "../pages/Dashboard/AddItems/AddItems"
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems"
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem"
import AdminRoute from "../ProtectedRoute/AdminRoute"


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
          element: <ProtectedRoute><Cart></Cart></ProtectedRoute>
        },
        //admin only
        {
          path: 'users',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems/></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems/></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem/></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        // {
        //   path: 'updateItem/:id',
        //   element: <AdminRoute><UpdateItem/></AdminRoute>,
        //   loader: () => fetch("http://localhost:5000/menu")
        // }
      ]
    }
])