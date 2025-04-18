import { Outlet } from "react-router";
import { Header } from "../Header";
import { About } from "../about";
import { Footer } from "../Footer";

export function Layout() {
    return(
        <>
            <Header/>
            <Outlet/>
            <About/>
            <Footer/>
        </>
    )
}