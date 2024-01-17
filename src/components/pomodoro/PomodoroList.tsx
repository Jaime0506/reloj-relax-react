import { usePomodoroStore } from "../../hooks"
import { TimerAlert } from "../timerAlert/TimerAlert"
import { PomodoroItem } from "./PomodoroItem"

interface PomodoroListProps {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

export const PomodoroList = ({ openModal, isOpen, closeModal }: PomodoroListProps) => {

    const { timers, onDeleteTimer } = usePomodoroStore()

    const handleOnDeleteTimer = (uid: string | null) => {
        if (uid != null) {
            onDeleteTimer(uid)
            openModal()
        }
    }

    return (
        <>
            <TimerAlert isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
            <section className="mt-7 rounded flex w-[324px] flex-col gap-4 items-center">
                {timers.map((timer) => (<PomodoroItem key={timer.uid} timer={timer} handleOnDeleteTimer={handleOnDeleteTimer} />))}
            </section>
        </>
    )
}
