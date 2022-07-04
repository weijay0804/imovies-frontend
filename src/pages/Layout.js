// react router layout

import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

const Layout = () => {
    return (
        <main className="app">
            <NavBar />
            <Outlet />
        </main>
    )
}

export default Layout;
