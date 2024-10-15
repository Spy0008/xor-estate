import Navbar from '../../components/navbar/NavBar';
import "../../pages/layout/Layout.scss";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout