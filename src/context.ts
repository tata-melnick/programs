import {ListCards} from "./types";
import {createContext} from "react";

interface ListCardsContext {
    list: ListCards;
    setList: (list: ListCards) => void;
}

export const ListCardsContext = createContext<ListCardsContext | null>(null);