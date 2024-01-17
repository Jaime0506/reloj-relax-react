import { ModalWrapper } from ".."

interface TimerAlertProps {
    isOpen: boolean
    closeModal: () => void
    openModal: () => void
}
export const TimerAlert = ({ isOpen, closeModal }: TimerAlertProps) => {
    return (
        <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
            <div>Se acabo el tiempo papu</div>
        </ModalWrapper>
    )
}
