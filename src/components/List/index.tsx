import React, {useContext} from "react";
import styles from "./list.module.css";
import Card from "../Card";
import {ListCardsContext} from "../../context";

const MainList: React.FC = () => {
    const {list} = useContext(ListCardsContext);

    return (
        <div className={styles.content}>
            <div className={styles.programs}>
                {list.map((item)=>(
                    <Card detail={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default MainList;