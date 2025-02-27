import React from "react"
import styles from "./styles.module.css"

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>ЛОГОТИП</div>
            <div className={styles.img}>
                <div className={styles.btnImg}>
                    <img src="/public/notification.png" alt="Notification" />
                </div>
                <div className={styles.btnImg}>
                    <img src="/public/unknownUser.png" alt="User" />
                </div>
            </div>
        </div>
    )
}

export default Header
