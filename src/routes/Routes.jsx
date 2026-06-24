import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import HomeLoader from "../components/HomeLoader";
import CategoryDetails from "../pages/CategoryDetails";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import SuccessPage from "../pages/SuccessPage";
import OrdersPage from "../pages/OrdersPage";

export const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        Component: MainLayout,
        loader:HomeLoader,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "shop",
                Component: Shop
            },
            {
                path: "contact",
                Component: Contact
            },
            {
                path: "category/:id",
                Component: CategoryDetails,
            },
            {
                path: "product/:id",
                Component: ProductDetails,
            },
            {
                path: "cartPage",
                Component: CartPage,
            },
            {
                path: "checkout",
                Component: CheckoutPage,
            },
            {
                path: "success",
                Component: SuccessPage,
            },
            {
                path: "orders",
                Component:OrdersPage,
            },
        ]
    },
]);