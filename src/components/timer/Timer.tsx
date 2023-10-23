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
    const [timerForm, setTimerForm] = useState({
        minutes: initialState.minutes,
        seconds: initialState.seconds
    });

    const increment = () => {
        setTimer({ ...timer, ["minutes"]: timer.minutes + 1 })
    }

    const decrement = () => {
        setTimer({ ...timer, ["minutes"]: timer.minutes - 1 })
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        const newValue = e.target.value;

        if (newValue.length <= 2) {
            setTimerForm({
                ...timerForm,
                [e.target.name]: parseInt(e.target.value),
            })
        }
    }
    // Correcion error de Ts al no usar la funcion ni el setTimer del useState
    return (
        <div>
            <span>
                <input
                    type='number'
                    className='font-clock'
                    onChange={onChangeInput}
                    value={timerForm.minutes}
                    name='minutes'
                    maxLength={2}
                />
                <button className='border-black rounded-sm border-2' onClick={increment}>Arriba</button>
                <button className='border-black rounded-sm border-2' onClick={decrement}>Abajo</button>
            </span>
        </div>
    )
}
