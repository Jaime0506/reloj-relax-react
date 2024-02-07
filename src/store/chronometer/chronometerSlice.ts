import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Timer } from '../../types';

interface InitialStateType {
    timer: Timer
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
}

export const chronometerSlice = createSlice({
    name: 'chronometer',
    initialState: initialState,
    reducers: {
        addTimer: (status, action: PayloadAction<Timer> ) => {
            status.timer = (action.payload)
        },

        deleteTimer: (state) => {
            state.timer = initialState.timer
        },

        deleteTimerWork: (state) => {
            state.timer.work = initialState.timer.work
        },

        deleteTimerRelax: (state) => {
            state.timer.relax = initialState.timer.relax
        }
    },
});

export const { addTimer, deleteTimer, deleteTimerWork, deleteTimerRelax, } = chronometerSlice.actions;