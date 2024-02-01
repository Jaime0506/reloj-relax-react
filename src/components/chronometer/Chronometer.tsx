import { useEffect, useState } from "react"
import { calculateTimeLeft, formatTime } from "../../helpers"

interface ChronometerProps {
    minutes: number
    seconds: number
    callback: () => void
}

export const Chronometer = ({ minutes, seconds,callback }: ChronometerProps,) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(minutes, seconds))

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = prevTime - 1

                if (newTime >= 0) {
                    return newTime
                } else {
                    clearInterval(interval)
                    callback()
                    return 0
                }
            })
        }, 1000)

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <p className="text-2xl font-clock">{formatTime(timeLeft)}</p>
}
