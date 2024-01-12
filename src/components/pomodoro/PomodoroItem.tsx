import { useEffect, useState } from "react"
import type { Timer } from "../../types"
import { calculateTimeLeft, formatTime } from "../../helpers"

export const PomodoroItem = ({ pomodoro: { minute, seconds } }: Timer) => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(minute, seconds))

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = prevTime - 1

                if (newTime >= 0) {
                    return newTime
                } else {
                    clearInterval(interval)
                    return 0
                }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <article className="w-[292px] rounded bg-white shadow-sm p-4 flex ">
            <header className="flex-1">
                <p className="text-lg">{formatTime(timeLeft)}</p>
            </header>

            <footer className="">
                <i className="fa-solid fa-circle-xmark text-xl hover:cursor-pointer text-red-500"></i>
            </footer>
        </article>
    )
}
