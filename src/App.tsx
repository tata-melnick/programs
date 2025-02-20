import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { ListCardsContext } from "./context"
import { ProgramList, ProgramType } from "./types"
import PROGRAMS from "./mock/programs.json"
import Programs from "./components/Programs"

const App: React.FC = () => {
    const [list, setList] = useState<ProgramList>(PROGRAMS)
    const [myList, setMyList] = useState<ProgramList>([])

    const addMyProgram = (program: ProgramType) => {
        setMyList((prev) => [...prev, program])
        setList(list.filter(({ id }) => id !== program.id))
    }

    return (
        <ListCardsContext.Provider
            value={{ list, myList, setList, addMyProgram }}
        >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Programs />} />
                    <Route path="/profile" element={<div>Профиль</div>} />
                    <Route
                        path="/certificate"
                        element={<div>Сертификаты</div>}
                    />
                </Route>
            </Routes>
        </ListCardsContext.Provider>
    )
}

export default App
