import { useState } from "react"
import { PomodoroList } from "./PomodoroList"
import alarm from '../../sounds/alarm.mp3'

interface PomodoroWrapperProps {
    openModal: () => void
}

export const PomodoroWrapper = ({ openModal }: PomodoroWrapperProps) => {

    const [isOpenModalAlarm, setIsOpenModalAlarm] = useState(true)
    const [audio] = useState(new Audio(alarm))

    const openModalAlarm = () => setIsOpenModalAlarm(true)

    const closeModalAlarm = () => setIsOpenModalAlarm(false)

    const startSound = () => {
        audio.play()
    }
    
    return (
        <div className="flex justify-center items-center flex-col mt-5">
            <header className="flex justify-center items-center h-10 flex-col gap-2">
                <span className="rounded-full flex p-2 bg-white w-8 items-center justify-center h-8">
                    <i className="fa-solid flex fa-plus text-black hover:cursor-pointer hover:text-xl ease-in-out duration-300" onClick={openModal}></i>
                </span>
                <p className="text-gray-400 font-thin text-sm">Add pomodoro timer</p>
            </header>

            <PomodoroList 
                isOpenModalAlarm={isOpenModalAlarm} 
                closeModalAlarm={closeModalAlarm} 
                openModalAlarm={openModalAlarm} 
                startSound={startSound}
            />
        </div>
    )
}
