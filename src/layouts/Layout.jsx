import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Header from "./Header";


const Layout = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;