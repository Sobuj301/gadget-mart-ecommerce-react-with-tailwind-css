import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import HomeLoader from "../components/HomeLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            index:true,
            Component:Home,
            loader:HomeLoader,
            errorElement:<ErrorPage></ErrorPage>,
           
        },
        {
            path:"shop",
            Component:Shop
        },
        {
            path:"contact",
            Component:Contact
        },
    ]
  },
]);