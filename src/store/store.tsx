import { configureStore } from "@reduxjs/toolkit";
import { chronometerSlice } from "./chronometer";


export const store = configureStore({
    reducer: {
        chronometerSlice: chronometerSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch