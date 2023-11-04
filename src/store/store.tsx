import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui";
import { pomodoroSlice } from "./pomodoro";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        pomodoro: pomodoroSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch