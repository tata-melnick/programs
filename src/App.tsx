import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./Layout"
import { ListCardsContext } from "./context"
import { ProgramList, ProgramType } from "./types"
import PROGRAMS from "./mock/programs.json"

const App: React.FC = () => {
    const [list, setList] = useState<ProgramList>(PROGRAMS)
    const [myList, setMyList] = useState<ProgramList>([])

    const addMyProgram = (p: ProgramType) => setMyList((prev) => [...prev, p])

    return (
        <ListCardsContext.Provider
            value={{ list, myList, setList, addMyProgram }}
        >
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </ListCardsContext.Provider>
    )
}

export default App
