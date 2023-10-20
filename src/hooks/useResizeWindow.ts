import { useEffect, useState } from "react"

export const useResizeWindow = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [heigth, setHeigth] = useState(window.innerHeight)

    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeigth(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return {
        width,
        heigth
    }
}