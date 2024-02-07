import { TypeChronometer } from "../../types"
import { ChronometerCard } from "./ChronometerCard"

interface ChronometerWorkProps {
    minutes: number | undefined
    seconds: number | undefined
    handleOnDeleteTimer: (type: TypeChronometer) => void
    timeOut: (type: TypeChronometer) => void
}
export const ChronometerWork = ({ minutes, seconds, handleOnDeleteTimer, timeOut }: ChronometerWorkProps) => {

    if (typeof minutes !== "number" || typeof seconds !== "number") return null

    return <ChronometerCard handleOnDeleteTimer={handleOnDeleteTimer} timeOut={timeOut} />
}