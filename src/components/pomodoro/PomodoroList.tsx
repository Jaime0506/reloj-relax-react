import { usePomodoroStore } from "../../hooks"
import { PomodoroItem } from "./PomodoroItem"

export const PomodoroList = () => {

    const { timers } = usePomodoroStore()
    
    return (
        <section className="mt-7 rounded flex w-[324px] flex-col gap-4 items-center">
            {timers.map((timer) => (<PomodoroItem key={timer.uid} {...timer} />))}
        </section>
    )
}
