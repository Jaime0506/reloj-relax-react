import { Timer } from "./"

interface WrapperTimerProps {
    closeModal: () => void
}
export const WrapperTimer = ({ closeModal }: WrapperTimerProps) => {
    return (
        <>
            <main className="rounded-md flex flex-col p-2">
                <section>
                    <Timer closeModal={closeModal}/>
                </section>
            </main>
        </>
    )
}
