import { useEffect, useState } from "react"
import { calculateTimeLeft, formatTime } from "../../helpers"
import { TypeChronometer } from "../../types"

interface ChronometerProps {
    minutes?: number | undefined
    seconds?: number | undefined
    timeOut: () => void 
    type: TypeChronometer
}

export const Chronometer = ({ minutes, seconds, timeOut, type }: ChronometerProps,) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(minutes, seconds))

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

        return () => {
            clearInterval(interval)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (timeLeft === 0) {
            timeOut()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft])

    return <p className={`${type === "work" ? "text-black" : "text-white" } text-2xl font-clock`}>{formatTime(timeLeft)}</p>
}
