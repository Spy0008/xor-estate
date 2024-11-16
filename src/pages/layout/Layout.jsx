import { useContext } from 'react';
import Navbar from '../../components/navbar/NavBar';
import { AuthContext } from '../../context/AuthContext';
import "../../pages/layout/Layout.scss";
import { Navigate, Outlet } from "react-router-dom";

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

const RequireAuth = () => {

    const { currentUser } = useContext(AuthContext);

    return !currentUser ? (
        <Navigate to="/login" />
    ) : (
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

export { Layout, RequireAuth };