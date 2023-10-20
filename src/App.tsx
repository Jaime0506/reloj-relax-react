
import { useState } from "react"
import { ClockWrapper, DrawerController, ModalWrapper, Navbar, PomodoroWrapper } from "./components"


export const App = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen(value => !value)
    }

    return (
        <>
            <main className="flex">
                <DrawerController isOpen={isOpen} />

                <section className="bg-black h-screen flex flex-col flex-1">
                    <Navbar toggleDrawer={toggleDrawer} />
                    <div className="flex justify-center items-center h-full flex-col gap-10">
                        <ClockWrapper />
                        <PomodoroWrapper />
                    </div>
                </section>
            </main>

            <ModalWrapper>
                Emote
            </ModalWrapper>
        </>
    )
}