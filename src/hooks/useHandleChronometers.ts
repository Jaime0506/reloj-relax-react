import { useEffect, useState } from 'react'
import { useChronometerStore } from './'

import alarm from '../sounds/alarm.mp3'
import type { TypeChronometer } from '../types'

export const useHandleChronometers = () => {
    const [audio] = useState(new Audio(alarm))
    const {timer, onDeleteTimer, onDeleteTimerWork } = useChronometerStore()

    const [isTimeOut, setIsTimeOut] = useState(false)
    const [isOpenAlertModal, setIsOpenAlertModal] = useState(false)

    const closeModal = (type?: TypeChronometer) => {
        setIsOpenAlertModal(false)

        if (type === "work") {
            onDeleteTimerWork()
        } else {
            onDeleteTimer()
        }
    }

    const openModal = () => setIsOpenAlertModal(true)

    const timeOut = () => {
        console.log("Me llamaron")
        setIsTimeOut(true)
        openModal()
    }

    useEffect(() => {
        if (isTimeOut && isOpenAlertModal) {
            audio.loop = true
            audio.play()

            return () => {
                audio.loop = false
                audio.pause()

                setIsTimeOut(false)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTimeOut, isOpenAlertModal])
   
    return {
        timer,
        onDeleteTimer,
        
        isOpenAlertModal,
        closeModal,

        timeOut
    }
}