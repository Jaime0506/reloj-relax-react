import { useEffect, useState } from "react"

import { calculateTimeLeft, formatTime } from "../../helpers"

import type { Timer } from "../../types"
import { useChronometerStore } from "../../hooks"

interface ChronometerProps {
    timer: Timer,
}

export const Chronometer = ({timer: { uid, work } }: ChronometerProps,) => {
    const { onDeleteTimer } = useChronometerStore()
    const { minute, seconds } = work

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(minute, seconds))

    const handleOnDeleteTimer = (uid: string | null) => {
        if (uid) {
            // onDeleteTimer(uid)
            alert("HASTA ACA VOY DECENTE")
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = prevTime - 1

                if (newTime >= 0) {
                    return newTime
                } else {
                    // startSound()

                    clearInterval(interval)
                    // handleOnDeleteTimer(uid)
                    return 0
                }
            })
        }, 1000)

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <section className="w-[400px] rounded bg-white shadow-sm p-4 flex mt-8 ">
            <header className="flex-1">
                <p className="text-2xl font-clock">{formatTime(timeLeft)}</p>
            </header>

            <footer className="">
                <i
                    className="fa-solid fa-circle-xmark text-xl hover:cursor-pointer text-red-500"
                    onClick={() => handleOnDeleteTimer(uid)}
                ></i>
            </footer>
        </section>
    )
}
