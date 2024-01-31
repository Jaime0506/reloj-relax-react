import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Timer } from '../../types';

interface InitialStateType {
    timers: Timer[]
    status: "start" | "pause"
}

const initialState: InitialStateType = {
    timers: [],
    status: "start" // "pause"
}

export const chronometerSlice = createSlice({
    name: 'chronometer',
    initialState: initialState,
    reducers: {
        addTimer: (status, action: PayloadAction<Timer> ) => {
            status.timers.push(action.payload)
        },

        deleteTimer: (state, action: PayloadAction<string>) => {
            state.timers = state.timers.filter(item => item.uid !== action.payload)
        },
    },
});

export const { addTimer, deleteTimer } = chronometerSlice.actions;