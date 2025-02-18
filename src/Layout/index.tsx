import React from "react"
import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Menu from "../components/Menu"

const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.main}>
                <Menu />
                <div className={styles.content}>
                    <h1 className={styles.title}>Иванов Иван</h1>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
