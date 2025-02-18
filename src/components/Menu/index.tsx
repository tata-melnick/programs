import React from "react"
import styles from "./menu.module.css"
import { Link } from "react-router-dom"

const Menu: React.FC = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/" className={styles.btn}>
                        Программы
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/profile" className={styles.btn}>
                        Профиль
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/certificate" className={styles.btn}>
                        Сертификаты
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
