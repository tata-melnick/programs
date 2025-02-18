import React, { useContext, useState } from "react"
import styles from "./programs.module.css"
import Tab from "../Tab"
import List from "../List"
import { ListCardsContext } from "../../context"

enum TabList {
    All = "all",
    My = "my",
}

const Programs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(TabList.All)
    const { list, myList } = useContext(ListCardsContext)

    const listProgram = {
        [TabList.All]: {
            label: "Все программы",
            content: <List list={list} />,
        },
        [TabList.My]: {
            label: "Мои программы",
            content: <List isMy list={myList} />,
        },
    }

    return (
        <>
            <div className={styles.labelTab}>
                {Object.keys(listProgram).map((tab: TabList) => (
                    <Tab
                        label={listProgram[tab].label}
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        active={tab === activeTab}
                    />
                ))}
            </div>
            {listProgram[activeTab].content}
        </>
    )
}

export default Programs
