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

export const pomodoroSlice = createSlice({
    name: 'pomodoro',
    initialState: initialState,
    reducers: {
        addTimer: (status, action: PayloadAction<Timer> ) => {
            status.timers.push(action.payload)
        }
    },
});

export const { addTimer } = pomodoroSlice.actions;