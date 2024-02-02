import { useState } from "react"
import { DrawerWrapper, Hour, ModalWrapper, Navbar, ClockWrapper, ChronometerWork } from "./components"
import { useChronometerStore } from "./hooks"

export const App = () => {

    const { timer } = useChronometerStore()

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
                        <Hour isOpenModalClock={isOpenModalClock} />
                        {
                            !timer.uid && (
                                <button className="fa-solid rounded-full mt-5 bg-white w-8 h-8 flex fa-plus text-black hover:cursor-pointer hover:text-xl ease-in-out duration-300 items-center justify-center" onClick={openModalClock}></button>
                            )
                        }
                        <ChronometerWork />
                    </div>
                </section>
            </main>

            <ModalWrapper
                isOpen={isOpenModalClock}
                closeModal={closeModalClock}
                bgColor="#ffffff"
            >
                <ClockWrapper closeModal={closeModalClock} />
            </ModalWrapper>
        </>
    )
}