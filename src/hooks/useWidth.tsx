import { useEffect, useState } from "react"

export const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)

    const handleWidth = () => {
        setWidth(innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleWidth)

        return () => window.removeEventListener("resize", handleWidth)
    }, [])

    return {
        width
    }
}