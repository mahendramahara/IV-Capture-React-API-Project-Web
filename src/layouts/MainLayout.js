import { Outlet } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"

export const MainLayout = () =>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}