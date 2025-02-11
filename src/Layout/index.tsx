import React from "react";
import styles from "./layout.module.css";
import Header from "./components/Header";
import  Footer from "./components/Footer";
import Main from "../components/Main";

const Layout: React.FC = () => {

    return (
        <div className={styles.layout}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Layout;
