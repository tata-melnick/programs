import React from "react"
import styles from "./tab.module.css"

type TabProps = {
    label: string
    active: boolean
    onClick(): void
}

const Tab: React.FC<TabProps> = ({ label, onClick, active }) => {
    const activeStyle = active
        ? {
              fontWeight: "500",
          }
        : {}

    return (
        <div className={styles.tab} onClick={onClick} style={activeStyle}>
            {label}
        </div>
    )
}

export default Tab
