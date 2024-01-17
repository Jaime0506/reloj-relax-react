import { useState } from "react"
import { PomodoroList } from "./PomodoroList"

export const PomodoroWrapper = () => {

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)

    const closeModal = () => setIsOpen(false)
    
    return (
        <div className="flex justify-center items-center flex-col mt-5">
            <header className="flex justify-center items-center h-10 flex-col gap-2">
                <span className="rounded-full flex p-2 bg-white w-8 items-center justify-center h-8">
                    <i className="fa-solid flex fa-plus text-black hover:cursor-pointer hover:text-xl ease-in-out duration-300" onClick={openModal}></i>
                </span>
                <p className="text-gray-400 font-thin text-sm">Add pomodoro timer</p>
            </header>

            <PomodoroList openModal={openModal} closeModal={closeModal} isOpen={isOpen} />
        </div>
    )
}
