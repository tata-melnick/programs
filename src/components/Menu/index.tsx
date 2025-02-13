import React from "react";
import styles from "./menu.module.css";
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {

    return (
        <div className={styles.menu}>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/programs" className={styles.btn}>ПРОГРАММЫ</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/profile" className={styles.btn}>ПРОФИЛЬ</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/certificates" className={styles.btn}>СЕРТИФИКАТЫ</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;