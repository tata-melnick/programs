import React, {useState} from "react";
import styles from "./tabs.module.css";
import Tab from "./Tab";
import MainList from "../List";

enum TabList {
    All = "all",
    My = "my",
}

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(TabList.All);

    const list = {
        [TabList.All]: { label: "Все программы", content: <MainList/>},
        [TabList.My]: { label: "Мои программы", content: <div>my</div>},
    }

    return (
        <>
            <div className={styles.labelTab}>
                {Object.keys(list).map((tab: TabList) => (
                    <Tab
                        label={list[tab].label}
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        active={tab === activeTab}
                    />
                ))}
            </div>
            {list[activeTab].content}
        </>
    )
}

export default Tabs;