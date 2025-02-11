import React from "react";
import styles from "./styles.module.css";

const Header: React.FC = () => {

    return (
        <div className={styles.header}>
            <a href="#" className={styles.logo}>ЛОГОТИП</a>
            <div className={styles.img}>
                <button className={styles.btnImg}>
                    <img  src="/public/notification.png"
                              alt="Notification"/>
                </button>
                <button className={styles.btnImg}>
                    <img  src="/public/unknownUser.png"
                              alt="Notification"/>
                </button>
            </div>
        </div>
    )
}

export default Header;
