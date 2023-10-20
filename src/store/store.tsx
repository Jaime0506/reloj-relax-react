import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch