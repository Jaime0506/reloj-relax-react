import { ModalWrapper } from ".."

interface TimerAlertProps {
    isOpen: boolean
    closeModal: () => void
    openModal: () => void
}
export const TimerAlert = ({ isOpen, closeModal }: TimerAlertProps) => {
    return (
        <ModalWrapper isOpen={isOpen} closeModal={closeModal} bgColor="#ffffff" >
            <div className="p-4 flex flex-col justify-center items-center">
                <i className="fa-solid fa-bell pb-4" style={{ fontSize: 120, color: "" }}></i>
                Se acabo el tiempo papu
            </div>
        </ModalWrapper>
    )
}
