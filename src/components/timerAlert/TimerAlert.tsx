import { ModalWrapper } from ".."

interface TimerAlertProps {
    isOpen: boolean
    closeModal: () => void
    openModal: () => void
}
export const TimerAlert = ({ isOpen, closeModal }: TimerAlertProps) => {
    // const { timers } = usePomodoroStore()

    return (
        <ModalWrapper isOpen={isOpen} closeModal={closeModal} bgColor="#ffffff" >
            <section className="py-4 flex flex-col justify-center items-center px-6 gap-3">
                <article className="flex flex-col justify-center items-center w-full">
                    <i className="fa-solid fa-bell pb-3" style={{ fontSize: 80 }}></i>
                    <div className="bg-green-600 w-1/3 text-center rounded py-1">
                        <p>5:00</p>
                    </div>
                </article>

                <article className="flex flex-col justify-center items-center w-full">
                    <p>Se ha acabado el tiempo, tomate un descanso </p>
                    <strong >Te lo ganaste</strong>
                </article>
            </section>
        </ModalWrapper>
    )
}
