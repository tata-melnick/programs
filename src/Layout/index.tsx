import React from "react";
import "./layout.css";
import {Header, Footer} from "./components";

const Layout: React.FC = () => {

    return (
        <div className="layout">
            <Header />
            <div className="mane">Mane</div>
            <Footer />
        </div>
    )
}

export default Layout;
