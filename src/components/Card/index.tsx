import React from "react";
import styles from "./card.module.css";
import Button from "../Button";
import {CardProgram} from "../../types";

interface ICardProps {
    detail: CardProgram;
}

const Card: React.FC<ICardProps> = ({detail}) => {
    const {pictures, title, deadline} = detail;

    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={pictures} alt="Нет картинки"/>
            </div>
            <div className={styles.description}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.deadline}>{deadline}</div>
            </div>
            <div className={styles.btn}>
                <Button type="outline">Подробнее</Button>
                <Button type="filled">Пройти</Button>
            </div>
        </div>
    )
}

export default Card;
