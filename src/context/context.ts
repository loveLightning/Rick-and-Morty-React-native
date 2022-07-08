import { createContext } from "react";

export interface AppContextInterface {
    status: string;
    gender: string;
};

export const FilterContext = createContext<any>(null)