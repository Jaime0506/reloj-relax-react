import { Timer } from "."

interface TimerWrapperProps {
    closeModal: () => void
}
export const TimerWrapper = ({ closeModal }: TimerWrapperProps) => {
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
