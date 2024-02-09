import { ChronometerRelax, ChronometerWork, TimeOutAlert } from "."
import { useHandleChronometers } from "../../hooks"

import { ModalWrapper } from '../modal'

export const ChronometerWrapper = () => {

    const { timer, onDeleteTimer, isOpenAlertModal, closeModal, timeOut} = useHandleChronometers()

    if (timer.uid && timer.work.minutes) {
        return (
            <>
                <ChronometerWork {...timer.work} handleOnDeleteTimer={onDeleteTimer} timeOut={timeOut} />

                <ModalWrapper
                    bgColor="#ffffff"
                    isOpen={isOpenAlertModal}
                    closeModal={closeModal}
                >
                    <TimeOutAlert closeModal={closeModal} type="work" />
                </ModalWrapper>
            </>
        )
    }

    if ((timer.uid && !timer.work.minutes) && timer.relax.minutes) {
        return (
            <>
                <ChronometerRelax {...timer.relax} handleOnDeleteTimer={onDeleteTimer} timeOut={timeOut} />

                <ModalWrapper
                    bgColor="#ffffff"
                    isOpen={isOpenAlertModal}
                    closeModal={closeModal}
                >
                    <TimeOutAlert closeModal={closeModal} type="relax" />
                </ModalWrapper>
            </>
        )
    }

    return null
}
