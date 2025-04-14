import { RouterProvider } from "react-router";
import { route } from "./route";

export default function App() {
  return(
    <>
      <RouterProvider router={route} />
    </>
  )
}