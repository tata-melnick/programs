import React from "react"
import cn from "classnames-ts"
import styles from "./tab.module.css"

type TabProps = {
    label: string
    active: boolean
    onClick(): void
}

const Tab: React.FC<TabProps> = ({ label, onClick, active }) => {
    return (
        <div className={cn(styles.tab, active && styles.active)} onClick={onClick}>
            {label}
        </div>
    )
}

export default Tab
