import { ReactNode, useEffect, useState } from "react"
import { DrawerWrapper, ModalWrapper, Hour, Navbar, ClockWrapper, ChronometerWrapper } from "./components"
import { useChronometerStore } from "./hooks"
import { ContainerProps } from "@mui/material"

export const App = () => {

    const { timer } = useChronometerStore()

    const [isOpenModalClock, setIsOpenModalClock] = useState(false)
    const [isOpenModalDrawer, setIsOpenModalDrawer] = useState(false)

    const toggleDrawer = () => {
        setIsOpenModalDrawer(value => !value)
    }

    const closeDrawerIfIsOpen = () => {
        console.log("ME clickearon")

        if (isOpenModalDrawer) {
            setIsOpenModalDrawer(false)
        }
    }

    const test = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.stopPropagation()
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

                <Container onClick={() => console.log("CLICK AMI")}>
                    <section className="bg-black h-screen flex flex-col flex-1">
                        <Navbar toggleDrawer={toggleDrawer} />
                        <div className="flex justify-center items-center h-full flex-col">
                            <Hour isOpenModalClock={isOpenModalClock} />
                            {
                                !timer.uid && (
                                    <button className="fa-solid rounded-full mt-5 bg-white w-8 h-8 flex fa-plus text-black hover:cursor-pointer hover:text-xl ease-in-out duration-300 items-center justify-center" onClick={openModalClock}></button>
                                )
                            }
                            <ChronometerWrapper />
                        </div>
                    </section>
                </Container>
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

interface ContainerProps {
    children: ReactNode
    onClick: () => void
}

const Container = ({ children, onClick }: ContainerProps) => {

    const test = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget)  {
            onClick()
        }
    }

    return (
        <div className="bg-red-400 w-full h-screen absolute opacity" onClick={test}>
            { children }
        </div>
    )
}