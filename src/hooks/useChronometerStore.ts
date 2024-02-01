import { useAppDispatch, useAppSelector } from "."
import { addTimer, deleteTimer } from "../store/chronometer"
import type { Timer } from "../types"

export const useChronometerStore = () => {
    const { status, timer } = useAppSelector(state => state.chronometerSlice)
    const dispatch = useAppDispatch()
    
    const onAddTimer = (timer: Timer) => {
        const UUID = crypto.randomUUID()

        dispatch(addTimer({...timer, uid: UUID}))
    }

    const onDeleteTimer = (uid: string | null) => {
        if (uid) dispatch(deleteTimer())
    }

    return {
        status,
        timer,

        onAddTimer,
        onDeleteTimer
    }

}