import { TypeChronometer } from '../../types'
import { Chronometer } from './'

interface ChronometerCardProps {
    handleOnDeleteTimer: (type: TypeChronometer) => void
    timeOut: (type: TypeChronometer) => void
}

export const ChronometerCard = ({ timeOut, handleOnDeleteTimer }: ChronometerCardProps) => {
    return (
        <section className="w-[400px] rounded bg-white shadow-sm p-4 flex mt-8 ">
            <header className="flex-1">
                <Chronometer timeOut={() => timeOut("work")} />
            </header>

            <footer className="">
                <i
                    className="fa-solid fa-circle-xmark text-xl hover:cursor-pointer text-red-500"
                    onClick={() => handleOnDeleteTimer('work')}
                ></i>
            </footer>
        </section>
    )
}
