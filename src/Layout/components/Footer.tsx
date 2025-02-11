import React from "react";
import styles from "./styles.module.css";

const Footer: React.FC = () => {

    return (
        <div className={styles.footer}>
            <div>
                <img  src="/public/icon.png"
                          alt="Notification"/>
                <span>2018-2023 Платформа, все права защищены</span>
            </div>
            <div>
                <ul className={styles.list}>
                    <li>
                        <a href="#" className={styles.item}>Контактная информация</a>
                        </li>
                    <li>
                        <a href="#" className={styles.item}>Конфиденциальность</a>
                    </li>
                    <li>
                        <a href="#" className={styles.item} >Пользовательское соглашение</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
