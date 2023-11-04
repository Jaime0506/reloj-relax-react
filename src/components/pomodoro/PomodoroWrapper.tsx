import { usePomodoroSlice, useUiStore } from "../../hooks"

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

            <section className="bg-gray-100 mt-6 rounded p-4 flex w-[324px] flex-col gap-4">
                {
                    timers.map((timer) => {
                        return (
                            <article className="w-[292px] rounded bg-white shadow-sm p-4">
                                <p>{timer.pomodoro.minute != undefined && timer.pomodoro.minute > 9 ? timer.pomodoro.minute : "0" + timer.pomodoro.minute} : 00</p>
                            </article>
                        )
                    })
                }
            </section>
        </div>
    )
}
