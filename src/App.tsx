import { useState } from "react"
import { ClockWrapper, DrawerWrapper, HourWrapper, ModalWrapper, Navbar, TimerWrapper } from "./components"

export const App = () => {

    const [isOpenModalClock, setIsOpenModalClock] = useState(false)
    const [isOpenModalDrawer, setIsOpenModalDrawer] = useState(false)

    const toggleDrawer = () => {
        setIsOpenModalDrawer(value => !value)
    }

    const openModalClock = () => {
        setIsOpenModalClock(true)
    }

    const closeModalClock = () => {
        setIsOpenModalClock(false)
    }

    return (
        <>
            <main className="flex">
                <DrawerWrapper isOpenDrawer={isOpenModalDrawer} />

                <section className="bg-black h-screen flex flex-col flex-1">
                    <Navbar toggleDrawer={toggleDrawer} />
                    <div className="flex justify-center items-center h-full flex-col">
                        <HourWrapper isOpenModal={isOpenModalClock} />
                        {/* 
                            TIENE SENTIDO QUE EL CONTROLADOR DEL MODAL QUE CONTIENE EL RELOJ ESTE FUERA DEL CLOCKWRAPPER ?
                            DONDE PUTAS ESTA EL COMPONENTE DLE RELOJ CONTENIDO X EL MODAL ?
                        */}
                        <ClockWrapper openModal={openModalClock} />
                    </div>
                </section>
            </main>

            <ModalWrapper
                isOpen={isOpenModalClock}
                closeModal={closeModalClock}
                bgColor="#ffffff"
            >
                <TimerWrapper closeModal={closeModalClock} />
            </ModalWrapper>
        </>
    )
}