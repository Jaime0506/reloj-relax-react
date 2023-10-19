
import { useState } from "react"
import { Clock, DrawerController, Navbar } from "./components"

export const App = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen(value => !value)
    }

    return (
        <main className="flex">
            <DrawerController isOpen={isOpen} />

            <section className="bg-black h-screen flex flex-col flex-1">
                <Navbar toggleDrawer={toggleDrawer} />
                <Clock />
            </section>
        </main>
    )
}