import { useAppDispatch, useAppSelector } from "."
import { addTimer, deleteTimer, deleteTimerRelax, deleteTimerWork } from "../store/chronometer"

import type { Timer } from "../types"

export const useChronometerStore = () => {
    const { timer } = useAppSelector(state => state.chronometerSlice)
    const dispatch = useAppDispatch()

    const onAddTimer = (timer: Timer) => {
        const UUID = crypto.randomUUID()

        dispatch(addTimer({ ...timer, uid: UUID }))
    }

    const onDeleteTimer = (uid: string | null) => {
        if (uid) dispatch(deleteTimer())
    }

    const onDeleteTimerWork = () => {
        dispatch(deleteTimerWork())
    }

    const onDeleteTimerRelax = () => {
        dispatch(deleteTimerRelax())
    }

    return {
        timer,

        onAddTimer,
        onDeleteTimer,
        onDeleteTimerWork,
        onDeleteTimerRelax
    }
}