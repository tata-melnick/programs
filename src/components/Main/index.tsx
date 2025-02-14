import React, {useContext} from "react";
import styles from "./main.module.css";
import Menu from "../Menu";
import Tabs from "../Tabs";
import Card from "../Card";
import {ListCardsContext} from "../../context";

const Main: React.FC = ({  }) => {
    const {list} = useContext(ListCardsContext);

    return (
        <div className={styles.main}>
            <Menu/>
            <div className={styles.content}>
                <h1 className={styles.title}>Иванов Иван</h1>
                <div className={styles.section}>
                    <Tabs/>
                </div>
                <div className={styles.programs}>
                    {list.map((item)=>(
                        <Card detail={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Main;