import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/Home";
import Category from "./pages/Category";
import { Product } from "./pages/product";
import { Checkout } from "./pages/Checkout";

const route = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/category/:name',
                element: <Category/>
            },
            {
                path: '/product/:category/:id/:slug',
                element: <Product/>
            }
        ]
    },
    {
        path: '/checkout',
        element: <Checkout/>
    }
])

export {route}