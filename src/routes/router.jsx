import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../page/Home/Home/Home";
import Manu from "../page/manu/Manu";
import OurShop from "../page/OurShop/OurShop/OurShop";
import ContactUs from "../page/ContactUs/ContactUs";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import DashboardHome from "../Dashboard/AdminDashboard/Home/DashboardHome";
import DashboardLayout from "../Dashboard/AdminDashboard/DashboardLayout";
import AddItem from "../Dashboard/AdminDashboard/AddItem/AddItem";
import ManageItem from "../Dashboard/AdminDashboard/ManageItem/ManageItem";
import MangeBooking from "../Dashboard/AdminDashboard/MangeBooking/MangeBooking";
import AllUsers from "../Dashboard/AdminDashboard/AllUsers/AllUsers";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/manu",
        element: <Manu />,
      },
      {
        path: "/ourShop/",
        element: <OurShop />,
      },
      {
        path: 'contact',
        element: <ContactUs />
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Registration />,
  },
  {
    path: 'dashboard',
    element:
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>,
    children: [
      {
        path: '',
        element: <DashboardHome />
      },
      {
        path: 'add-item',
        element: <AddItem />
      },
      {
        path: 'manage-items',
        element: <ManageItem />
      },
      {
        path: 'manage-booking',
        element: <MangeBooking />
      },
      {
        path: 'all-users',
        element: <AllUsers />
      }
    ]
  }
]);