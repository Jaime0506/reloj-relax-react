import { useEffect, useState } from "react"
import { calculateTimeLeft, formatTime } from "../../helpers"

interface ChronometerProps {
    minutes?: number | undefined
    seconds?: number | undefined
    timeOut: () => void 
}

export const Chronometer = ({ minutes = 0, seconds = 3, timeOut }: ChronometerProps,) => {
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

    return <p className="text-2xl font-clock">{formatTime(timeLeft)}</p>
}
