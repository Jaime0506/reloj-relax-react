import { useAppDispatch, useAppSelector } from "."
import { addTimer, deleteTimer } from "../store/pomodoro"
import type { Timer } from "../types"

export const usePomodoroStore = () => {
    const { status, timers } = useAppSelector(state => state.pomodoro)
    const dispatch = useAppDispatch()
    
    const onAddTimer = (timer: Timer) => {
        const UUID = crypto.randomUUID()

        dispatch(addTimer({...timer, uid: UUID}))
    }

    const onDeleteTimer = (uid: string | null) => {
        if (uid) dispatch(deleteTimer(uid))
    }

    return {
        status,
        timers,

        onAddTimer,
        onDeleteTimer
    }

}