import { useEffect, useState } from "react"
import { ModalWrapper } from ".."
import { useChronometerStore } from "../../hooks"
import { Chronometer, TimeOutAlert } from "./"

import alert from '../../sounds/alarm.mp3'

export const ChronometerWork = () => {

    const [audio] = useState(new Audio(alert))

    const { onDeleteTimer, timer } = useChronometerStore()

    const [isOpenAlertModal, setIsOpenAlertModal] = useState(false)
    const [isTimeOut, setisTimeOut] = useState(false)

    const { minutes, seconds } = timer.work

    const openModal = () => {
        setIsOpenAlertModal(true)
    }

    const closeModal = () => {
        setIsOpenAlertModal(false)
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

    const timeOut = () => {
        setisTimeOut(true)
        openModal()
    }

    useEffect(() => {
        if (isTimeOut && isOpenAlertModal) {
            audio.loop = true;
            audio.play()

            console.log("Emote")

            // Este return es el que se llama para lipiar el useEffect, aunque este dentro del condicional if
            return () => {
                audio.loop = false
                audio.pause()
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTimeOut, isOpenAlertModal])

    return (
        <>
            {
                (typeof minutes === "number" || typeof seconds === "number") ? (
                    <section className="w-[400px] rounded bg-white shadow-sm p-4 flex mt-8 ">
                        <header className="flex-1">
                            <Chronometer timeOut={timeOut}/>
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
                <TimeOutAlert closeModal={closeModal} />
            </ModalWrapper>
        </>
    )
}