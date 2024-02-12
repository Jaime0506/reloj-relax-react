
import { ChronometerCard } from "./"
import type { TypeChronometer } from "../../types"

interface ChronometerRelaxProps {
    minutes: number | undefined
    seconds: number | undefined
    handleOnDeleteTimer: (type: TypeChronometer) => void
    timeOut: () => void
}

export const ChronometerRelax = ({ minutes, seconds, handleOnDeleteTimer, timeOut }: ChronometerRelaxProps) => {

    if (typeof minutes !== "number" || typeof seconds !== "number") return null
    
    return <ChronometerCard handleOnDeleteTimer={handleOnDeleteTimer} timeOut={timeOut} type="relax" minutes={minutes} seconds={seconds} />
}
