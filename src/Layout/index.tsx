import React from "react";
import "./layout.css";
import Header from "./components/Header";
import  Footer from "./components/Footer";

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
