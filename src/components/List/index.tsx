import React from "react"
import styles from "./list.module.css"
import Card from "../Card"
import { ProgramList } from "../../types"

interface IListProps {
    isMy: boolean
    list: ProgramList
}

const List: React.FC<IListProps> = ({ isMy, list }) => {
    return (
        <div className={styles.programs}>
            {list.length === 0 ? (
                <div className={styles.noPrograms}>Нет активных программ</div>
            ) : (
                list.map((item) => (
                    <Card
                        detail={item}
                        key={item.id}
                        isMy={isMy}
                        listProgram={list}
                    />
                ))
            )}
        </div>
    )
}

export default List
