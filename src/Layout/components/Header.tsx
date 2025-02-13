import React from "react";
import styles from "./styles.module.css";
import Button from "../../components/Button";

const Header: React.FC = () => {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>ЛОГОТИП</div>
            <div className={styles.img}>
                <Button className={styles.btnImg}>
                    <img  src="/public/notification.png"
                              alt="Notification"/>
                </Button>
                <Button className={styles.btnImg}>
                    <img  src="/public/unknownUser.png"
                              alt="Notification"/>
                </Button>
            </div>
        </div>
    )
}

export default Header;
