import React, { useContext } from "react"
import styles from "./card.module.css"
import Button from "../Button"
import { ProgramType } from "../../types"
import { ListCardsContext } from "../../context"

interface ICardProps {
    detail: ProgramType
}

const Card: React.FC<ICardProps> = ({ detail, isMy }) => {
    const { pictures, title, deadline } = detail
    const { addMyProgram } = useContext(ListCardsContext)

    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={pictures} alt="" />
            </div>
            <div className={styles.description}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.deadline}>{deadline}</div>
            </div>
            {isMy ? (
                <div className={styles.btn}>
                    <Button type="filled">Смотреть</Button>
                </div>
            ) : (
                <div className={styles.btn}>
                    <Button type="outline">Подробнее</Button>
                    <Button type="filled" onClick={() => addMyProgram(detail)}>
                        Пройти
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Card
