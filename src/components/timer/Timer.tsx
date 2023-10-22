import { useState } from 'react'

interface Timer {
    minutes: number,
    seconds: number

    pomodoro: {
        minutes: number
        seconds: number
    }
}

const initialState: Timer = {
    minutes: 20,
    seconds: 0,

    pomodoro: {
        minutes: 5,
        seconds: 0
    }
}

export const Timer = () => {
    const [timer, setTimer] = useState<Timer>(initialState)

    const changeTime = () => {
        setTimer({...timer})
    }

    // Correcion error de Ts al no usar la funcion ni el setTimer del useState
    return (
        <div onClick={changeTime}>
            <span className='font-clock'>
                { timer.minutes }:{ timer.seconds > 9 ? timer.seconds : timer.seconds + "0"}
            </span>
        </div>
    )
}
