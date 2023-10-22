import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = () => {

const location = useLocation();
const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') ;

    return (
        <div>
            { noHeaderFooter|| <Navbar/>}
            <Outlet/>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Layout;