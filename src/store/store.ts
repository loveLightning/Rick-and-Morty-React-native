import { configureStore } from "@reduxjs/toolkit"
import dataCharacters from "./dataCharacters/dataCharacters"
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import dataLocations from "./dataLocations/dataLocations";
import dataEpisodes from "./dataEpisodes/dataEpisodes"
import dataFilterCharacters from "./dataStatus/dataFilterCharacters";

export const store = configureStore({
    reducer: {
        dataCharacters: dataCharacters,
        dataLocations: dataLocations,
        dataEpisodes: dataEpisodes,
        dataFilterCharacters: dataFilterCharacters
    },

})

setupListeners(store.dispatch)//обновление при переходе с вкладки на вкладку

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch