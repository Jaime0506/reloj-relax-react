import { useUiStore } from "../../hooks"

export const PomodoroWrapper = () => {

    const { handleOpenModal } = useUiStore()

    return (
        <div className="flex justify-center items-center h-10 flex-col gap-2">
            <span className="rounded-full flex p-2 bg-white w-8 items-center justify-center h-8">
                <i className="fa-solid flex fa-plus text-black hover:cursor-pointer hover:text-xl ease-in-out duration-300" onClick={handleOpenModal}></i>
            </span>
            <p className="text-gray-400 font-thin text-sm">Add pomodoro timer</p>
        </div>
    )
}
