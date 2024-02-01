import { useEffect, useState } from "react"
import { calculateTimeLeft, formatTime } from "../../helpers"

import { Timer } from "../../types"

interface ChronometerProps {
    timer: Timer
    size?: string
}

export const ChronometerRelax = ({ size, timer }: ChronometerProps) => {

    const { relax } = timer
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(relax.minutes, relax.seconds))

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
        <p className={`${size && "text-8xl"}`}>{formatTime(timeLeft)}</p>
    )
}
