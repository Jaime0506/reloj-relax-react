import { usePomodoroSlice, useUiStore } from "../../hooks"
import { PomodoroItem } from "./PomodoroItem"

export const PomodoroWrapper = () => {

    const { handleOpenModal } = useUiStore()
    const { timers } = usePomodoroSlice()

    return (
        <div className="flex justify-center items-center flex-col mt-5">
            <header className="flex justify-center items-center h-10 flex-col gap-2">
                <span className="rounded-full flex p-2 bg-white w-8 items-center justify-center h-8">
                    <i className="fa-solid flex fa-plus text-black hover:cursor-pointer hover:text-xl ease-in-out duration-300" onClick={handleOpenModal}></i>
                </span>
                <p className="text-gray-400 font-thin text-sm">Add pomodoro timer</p>
            </header>

            <section className="mt-7 rounded flex w-[324px] flex-col gap-4 items-center">
                { timers.map((timer) => (<PomodoroItem key={timer.uid} {...timer}/> )) }
            </section>
        </div>
    )
}
