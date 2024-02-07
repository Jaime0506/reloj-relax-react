import { useEffect, useState } from "react"
import { ChronometerRelax, ChronometerWork, TimeOutAlert } from "."
import { useChronometerStore } from "../../hooks"

import { ModalWrapper } from '../modal'

import alert from '../../sounds/alarm.mp3'
import { TypeChronometer } from "../../types"

export const ChronometerWrapper = () => {
    const [audio] = useState(new Audio(alert))

    const { timer, onDeleteTimer, onDeleteTimerWork, onDeleteTimerRelax } = useChronometerStore()
    const [isOpenAlertModal, setisOpenAlertModal] = useState(false)
    const [isTimeOut, setisTimeOut] = useState(false)

    const closeModal = () => {
        setisOpenAlertModal(false)
        onDeleteTimerWork()
    }
    const openModal = () => setisOpenAlertModal(true)

    const handleOnDeleteTimer = () => {
        if (timer.uid) {
            onDeleteTimer(timer.uid)
        }
    }

    const timeOut = (type: TypeChronometer) => {
        setisTimeOut(true)

        if (type === "work") {
            openModal()
        }

        if (type === "relax") {
            onDeleteTimerRelax()
        }
    }

    useEffect(() => {
        if (isTimeOut && isOpenAlertModal) {
            audio.loop = true
            audio.play()

            return () => {
                audio.loop = false
                audio.pause()

                setisTimeOut(false)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTimeOut, isOpenAlertModal])

    if (timer.uid && timer.work.minutes) {
        return (
            <>
                <ChronometerWork {...timer.work} handleOnDeleteTimer={handleOnDeleteTimer} timeOut={timeOut} />

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

    if (timer.uid && !timer.work.minutes && timer.relax.minutes) {
        return <ChronometerRelax />
    }
}
