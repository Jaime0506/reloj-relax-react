import { useState } from "react"
import { ClockWrapper, DrawerController, ModalWrapper, Navbar, PomodoroWrapper, WrapperTimer } from "./components"

export const App = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const toggleDrawer = () => {
        setIsOpen(value => !value)
    }

    const openModal = () => {
        setIsOpenModal(true)
    }
    
    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <>
            <main className="flex">
                <DrawerController isOpen={isOpen} />

                <section className="bg-black h-screen flex flex-col flex-1">
                    <Navbar toggleDrawer={toggleDrawer} />
                    <div className="flex justify-center items-center h-full flex-col">
                        <ClockWrapper isOpen={isOpenModal}/>
                        <PomodoroWrapper />
                    </div>
                </section>
            </main>

            <ModalWrapper
                isOpen={isOpenModal}
                closeModal={closeModal}
            >
               <WrapperTimer closeModal={closeModal}/>
            </ModalWrapper>
        </>
    )
}