import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Main from "./components/Main";
import Tabs from "./components/Tabs";
import {ListCardsContext} from "./context";
import {ListCards} from "./types";
import PROGRAMS from "./mock/programs.json";

const App: React.FC = () => {
    const [list, setList] = useState<ListCards>(PROGRAMS)


    return (
        <ListCardsContext.Provider value={{list, setList}}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="main" element={<Main />}/>
                    <Route path="tabs" element={<Tabs />}>
                    </Route>
                </Route>
            </Routes>
        </ListCardsContext.Provider>
)
}

export default App;
