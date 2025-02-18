import React from "react"
import cn from "classnames-ts"
import styles from "./button.module.css"

interface IButtonProps {
    type?: "filled" | "outline"
    className?: string
    children?: React.ReactNode
    onClick(): void
}

const Button: React.FC<IButtonProps> = ({
    children,
    onClick,
    className,
    type = "text",
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                styles.btn,
                type === "filled" && styles.btnFilled,
                type === "outline" && styles.btnOutline,
                className
            )}
        >
            {children && children}
        </button>
    )
}

export default Button
