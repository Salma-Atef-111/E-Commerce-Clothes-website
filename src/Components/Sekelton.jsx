import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function Sekelton(){

    return <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
}