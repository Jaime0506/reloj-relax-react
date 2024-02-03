import { useState } from "react"
import { ModalWrapper } from ".."
import { useChronometerStore } from "../../hooks"
import { Chronometer, TimeOutAlert } from "./"

import alert from '../../sounds/alarm.mp3'

export const ChronometerWork = () => {

    const { onDeleteTimer, timer } = useChronometerStore()
    const [isOpenAlertModal, setIsOpenAlertModal] = useState(false)
    const [audio] = useState(new Audio(alert))

    const { minutes, seconds } = timer.work

    const openModal = () => {
        setIsOpenAlertModal(true)
    }

    const closeModal = () => {
        setIsOpenAlertModal(false)
        timer.uid && onDeleteTimer(timer.uid)
    }

    const handleOnDeleteTimer = (type: "timeOut" | "delete") => {
        if (timer.uid) {
            if (type === "timeOut") {
                openModal()
            } else {
                onDeleteTimer(timer.uid)
            }
        }
    }

    return (
        <>
            {
                (typeof minutes === "number" || typeof seconds === "number") ? (
                    <section className="w-[400px] rounded bg-white shadow-sm p-4 flex mt-8 ">
                        <header className="flex-1">
                            <Chronometer callback={handleOnDeleteTimer} minutes={minutes} seconds={seconds} />
                        </header>

                        <footer className="">
                            <i
                                className="fa-solid fa-circle-xmark text-xl hover:cursor-pointer text-red-500"
                                onClick={() => handleOnDeleteTimer("delete")}
                            ></i>
                        </footer>
                    </section>
                ) : (null)
            }

            <ModalWrapper
                bgColor="#ffffff"
                isOpen={isOpenAlertModal}
                closeModal={closeModal}
            >
                <TimeOutAlert closeModal={closeModal} audio={audio} />
            </ModalWrapper>
        </>
    )
}