import { useEffect, useState } from "react"

import { calculateTimeLeft, formatTime } from "../../helpers"

import type { Timer } from "../../types"

interface PomodoroItemProps {
    timer: Timer,
    handleOnDeleteTimer: (uid: string | null) => void
    startSound: () => void
}

export const PomodoroItem = ({ handleOnDeleteTimer, startSound ,timer: { uid, pomodoro } }: PomodoroItemProps, ) => {
    const { minute, seconds } = pomodoro

    // No sirve porque al controlar la visibilidad del Modal desde un estado global, estamos
    // modificando ese valor en los otros componentes que usen tambien el modal, dando prioridad
    // a los de mayor jerarquia, debo idear lamanera de que reconozca desde donde lo estan llamando
    // Para asi mismo no disparar los modales usados en componentes Padres.
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(minute, seconds))
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = prevTime - 1

                if (newTime >= 0) {
                    return newTime
                } else {
                    startSound()

                    clearInterval(interval)
                    handleOnDeleteTimer(uid)
                    return 0
                }
            })
        }, 1000)

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <article className="w-[292px] rounded bg-white shadow-sm p-4 flex ">
                <header className="flex-1">
                    <p className="text-lg">{formatTime(timeLeft)}</p>
                </header>

                <footer className="">
                    <i
                        className="fa-solid fa-circle-xmark text-xl hover:cursor-pointer text-red-500"
                        onClick={() => handleOnDeleteTimer(uid)}
                    ></i>
                </footer>
            </article>
        </>
    )
}


// <article className="w-[292px] rounded bg-white shadow-sm p-4 flex ">
//             <header className="flex-1">
//                 <p className="text-lg">{formatTime(timeLeft)}</p>
//             </header>

//             <footer className="">
//                 <i
//                     className="fa-solid fa-circle-xmark text-xl hover:cursor-pointer text-red-500"
//                     onClick={handleOnDeleteTimer}
//                 ></i>
//             </footer>
//         </article>