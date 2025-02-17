import React from "react";
import styles from "./styles.module.css";

const Footer: React.FC = () => {

    return (
        <div className={styles.footer}>
            <div>
                <img
                    src="/public/icon.png"
                    alt="Notification"
                />
                <span>2018-2023 Платформа, все права защищены</span>
            </div>
            <div>
                <ul className={styles.list}>
                    <li className={styles.item}>Контактная информация</li>
                    <li className={styles.item}>Конфиденциальность</li>
                    <li className={styles.item}>Пользовательское соглашение</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
