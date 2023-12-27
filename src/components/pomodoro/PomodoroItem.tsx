import { useEffect, useState } from "react"
import { Timer } from "../../types"

const calculateTimeLeft = (minutes: number | undefined, seconds: number | undefined): number => {
    if (minutes != undefined &&  seconds != undefined) {
        return minutes * 60 + seconds
    }

    return 0
}

const formatTime = (seconds: number): string => {
    const formattedMinutes = Math.floor(seconds / 60)
    const formattedSeconds = seconds % 60

    console.log(seconds)

    return `${String(formattedMinutes).padStart(2, "0")}:${String(formattedSeconds).padStart(2, "0")}`
}

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
        <article className="w-[292px] rounded bg-white shadow-sm p-4">
            <p className="text-lg">{formatTime(timeLeft)}</p>
        </article>
    )
}
