import { useEffect, useState } from "react"

import { calculateTimeLeft, formatTime } from "../../helpers"
import { usePomodoroStore } from "../../hooks"

import alarm from '../../sounds/alarm.mp3'

import type { Timer } from "../../types"

export const PomodoroItem = ({ uid, pomodoro: { minute, seconds } }: Timer) => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(minute, seconds))
    const { onDeleteTimer } = usePomodoroStore()
    const [audio] = useState(new Audio(alarm))

    const startSound = () => {
        audio.play()
    }

    const handleOnDeleteTimer = () => {
        console.log("Se borra")
        onDeleteTimer(uid)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = prevTime - 1

                if (newTime >= 0) {
                    return newTime
                } else {
                    startSound()
                    
                    clearInterval(interval)
                    handleOnDeleteTimer()
                    return 0
                }
            })
        }, 1000)

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <article className="w-[292px] rounded bg-white shadow-sm p-4 flex ">
            <header className="flex-1">
                <p className="text-lg">{formatTime(timeLeft)}</p>
            </header>

            <footer className="">
                <i 
                    className="fa-solid fa-circle-xmark text-xl hover:cursor-pointer text-red-500"
                    onClick={handleOnDeleteTimer}
                ></i>
            </footer>
        </article>
    )
}
