import { useAppDispatch, useAppSelector } from "."
import { addTimer } from "../store/pomodoro"
import { Timer } from "../types"

export const usePomodoroSlice = () => {
    const { status, timers } = useAppSelector(state => state.pomodoro)
    const dispatch = useAppDispatch()
    
    const onAddTimer = (timer: Timer) => {
        console.log(timer)
        dispatch(addTimer(timer))
    }

    return {
        status,
        timers,

        onAddTimer
    }

}