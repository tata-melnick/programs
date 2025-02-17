import { ProgramType } from "./types"
import { createContext } from "react"

interface ListCardsContext {
    list: ProgramType[]
    myList: ProgramType[]
    setList: (list: ProgramType[]) => void
    addMyProgram: (program: ProgramType) => void
}

export const ListCardsContext = createContext<ListCardsContext | null>(null)
