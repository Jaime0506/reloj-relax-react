import { useState } from "react"
import { PomodoroList } from "./PomodoroList"

import alarm from '../../sounds/alarm.mp3'

interface ClockWrapperProps {
    openModal: () => void
}

export const ClockWrapper = ({ openModal }: ClockWrapperProps) => {

    const [isOpenModalAlarm, setIsOpenModalAlarm] = useState(true)
    const [audio] = useState(new Audio(alarm))

    const openModalAlarm = () => setIsOpenModalAlarm(true)

    const closeModalAlarm = () => setIsOpenModalAlarm(false)

    const startSound = () => {
        audio.play()
    }

    return (
        <main className="flex justify-center items-center flex-col mt-5">
            <header className="flex justify-center items-center h-10 flex-col gap-2">
                <section className="rounded-full flex p-2 bg-white w-8 items-center justify-center h-8">
                    <button className="fa-solid flex fa-plus text-black hover:cursor-pointer hover:text-xl ease-in-out duration-300" onClick={openModal}></button>
                </section>
                <p className="text-gray-400 font-thin text-sm">Add pomodoro timer</p>
            </header>

            <PomodoroList 
                isOpenModalAlarm={isOpenModalAlarm} 
                closeModalAlarm={closeModalAlarm} 
                openModalAlarm={openModalAlarm} 
                startSound={startSound}
            />
        </main>
    )
}
