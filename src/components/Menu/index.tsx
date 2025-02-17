import React from "react";
import styles from "./menu.module.css";
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {

    return (
        <div className={styles.menu}>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/main" className={styles.btn}>Программы</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="#" className={styles.btn}>Профиль</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="#" className={styles.btn}>Сертификаты</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;