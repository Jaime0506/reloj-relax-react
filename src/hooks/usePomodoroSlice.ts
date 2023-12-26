import { useAppDispatch, useAppSelector } from "."
import { addTimer } from "../store/pomodoro"
import { Timer } from "../types"

export const usePomodoroSlice = () => {
    const { status, timers } = useAppSelector(state => state.pomodoro)
    const dispatch = useAppDispatch()
    
    const onAddTimer = (timer: Timer) => {
        const UUID = crypto.randomUUID()

        dispatch(addTimer({...timer, uid: UUID}))
    }

    return {
        status,
        timers,

        onAddTimer
    }

}