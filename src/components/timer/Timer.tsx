import { useState,  useEffect } from 'react'

interface Timer {
    minutes: number,
    seconds: number
}

interface Props {
    type: 'focus' | 'relax'
}

const initialState: Timer = {
    minutes: 20,
    seconds: 0,
}

export const Timer = ({ type }: Props) => {
    const [timer, setTimer] = useState<Timer>(initialState)

    useEffect(() => {
        if (type == "focus") {
            setTimer({
                minutes: 20,
                seconds: 0
            })
        }

        if (type == "relax") {
            setTimer({
                minutes: 5,
                seconds: 0
            })
        }
    }, [type])
    

    const incrementMinutes = () => {
        setTimer({ ...timer, ["minutes"]: timer.minutes + 1 })
    }

    const decrementMinutes = () => {
        if (timer.minutes != 1) {
            setTimer({ ...timer, ["minutes"]: timer.minutes - 1 })
        }
    }

    const incrementSeconds = () => {
        setTimer({ ...timer, ["seconds"]: timer.seconds + 1 })
    }

    const decrementsSeconds = () => {
        if (timer.seconds != 0) {
            setTimer({ ...timer, ["seconds"]: timer.seconds - 1 })
        }
    }

    // Correcion error de Ts al no usar la funcion ni el setTimer del useState
    return (
        <div className='flex w-full flex-col text-center'>
            <h1 className='pb-2 text-gray-400'>{type == "focus" ? "Timer for focus" : "Time for relax"}</h1>
            <span className='flex justify-center bg-white text-4xl text-center items-center'>
                <div className='text-4xl'>
                    <button
                        onClick={incrementMinutes}
                        className='rounded-sm'
                    >
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                    <h3 className='bg-black font-clock text-white p-2 rounded-l-sm'>
                        {timer.minutes > 9 ? timer.minutes : "0" + timer.minutes}
                    </h3>
                    <button onClick={decrementMinutes}>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>

                <p className='bg-black text-white h-14'>:</p>

                <div className='text-4xl'>
                    <button onClick={incrementSeconds}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                    <h3 className='bg-black font-clock text-white p-2 rounded-r-sm'>
                        {timer.seconds > 9 ? timer.seconds : "0" + timer.seconds}
                    </h3>
                    <button onClick={decrementsSeconds}>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
            </span>
        </div>
    )
}
