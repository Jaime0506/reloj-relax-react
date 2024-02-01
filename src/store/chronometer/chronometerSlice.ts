import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Timer } from '../../types';

interface InitialStateType {
    timer: Timer
    status: "start" | "pause"
}

const initialState: InitialStateType = {
    timer: {
        work: {
            minutes: undefined,
            seconds: undefined
        },

        relax: {
            minutes: undefined,
            seconds: undefined
        }
    },
    status: "pause"
}

export const chronometerSlice = createSlice({
    name: 'chronometer',
    initialState: initialState,
    reducers: {
        addTimer: (status, action: PayloadAction<Timer> ) => {
            status.timer = (action.payload)
            status.status = "start"
        },

        deleteTimer: (state) => {
            state.timer = initialState.timer
            state.status = "pause"
        },
    },
});

export const { addTimer, deleteTimer } = chronometerSlice.actions;