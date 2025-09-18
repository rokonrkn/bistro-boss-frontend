import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../page/Home/Home/Home";
import Manu from "../page/manu/Manu";
import OurShop from "../page/OurShop/OurShop/OurShop";
import ContactUs from "../page/ContactUs/ContactUs";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";


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
        element: <ContactUs/>
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
  }
]);