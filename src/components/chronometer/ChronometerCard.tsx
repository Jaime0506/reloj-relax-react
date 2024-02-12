import { TypeChronometer } from '../../types'
import { Chronometer } from './'

interface ChronometerCardProps {
    minutes: number
    seconds: number
    handleOnDeleteTimer: (type: TypeChronometer) => void
    timeOut: () => void
    type: TypeChronometer
}

export const ChronometerCard = ({ timeOut, handleOnDeleteTimer, type, minutes, seconds }: ChronometerCardProps) => {
    return (
        <section className={`w-[400px] rounded ${type === 'work' ? "bg-white" : "bg-green-500" } shadow-sm p-4 flex mt-8`}>
            <header className="flex-1">
                <Chronometer timeOut={timeOut} type={type} minutes={minutes} seconds={seconds} />
            </header>

            <footer className="">
                <i
                    className={`fa-solid fa-circle-xmark text-xl hover:cursor-pointer ${type === 'work' ? "text-red-500" : "text-white" }`}
                    onClick={() => handleOnDeleteTimer('work')}
                ></i>
            </footer>
        </section>
    )
}
