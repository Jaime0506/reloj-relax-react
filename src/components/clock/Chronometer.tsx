import { useEffect, useState } from "react"
import type { Timer } from "../../types"
import { calculateTimeLeft, formatTime } from "../../helpers"

interface ChronometerProps {
    timer: Timer
}

export const Chronometer = ({ timer }: ChronometerProps) => {
    const { relax } = timer

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(relax.minute, relax.seconds))

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
        <section className="w-[292px] rounded bg-white shadow-sm p-4 flex ">
            <p className="text-lg">{formatTime(timeLeft)}</p>
        </section>
    )
}
