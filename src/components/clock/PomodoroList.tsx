import { usePomodoroStore } from "../../hooks"
import { TimerAlert } from "../timerAlert/TimerAlert"
import { PomodoroItem } from "./PomodoroItem"

interface PomodoroListProps {
    isOpenModalAlarm: boolean
    openModalAlarm: () => void
    closeModalAlarm: () => void
    startSound: () => void
}

export const PomodoroList = ({ isOpenModalAlarm, openModalAlarm, closeModalAlarm, startSound }: PomodoroListProps) => {

    const { timers, onDeleteTimer } = usePomodoroStore()

    const handleOnDeleteTimer = (uid: string | null) => {
        if (uid != null) {
            const timerRelax = timers.find((item) =>  item.uid === uid)
            console.log(timerRelax)

            openModalAlarm()
            onDeleteTimer(uid)
        }
    }

    return (
        <>
            <TimerAlert isOpen={isOpenModalAlarm} openModal={openModalAlarm} closeModal={closeModalAlarm} />
            <section className="mt-7 rounded flex w-[324px] flex-col gap-4 items-center">
                {timers.map((timer) => (<PomodoroItem key={timer.uid} timer={timer} handleOnDeleteTimer={handleOnDeleteTimer} startSound={startSound} />))}
            </section>
        </>
    )
}
