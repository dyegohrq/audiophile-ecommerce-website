import { RouterProvider } from "react-router";
import { route } from "./route";
import ProductProvider from "./context/Context";

export default function App() {
  return(
    <>
      <ProductProvider>
        <RouterProvider router={route} />
      </ProductProvider>
    </>
  )
}