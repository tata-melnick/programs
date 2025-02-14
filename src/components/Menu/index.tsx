import React from "react";
import styles from "./menu.module.css";
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {

    return (
        <div className={styles.menu}>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/main" className={styles.btn}>ПРОГРАММЫ</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="#" className={styles.btn}>ПРОФИЛЬ</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="#" className={styles.btn}>СЕРТИФИКАТЫ</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;