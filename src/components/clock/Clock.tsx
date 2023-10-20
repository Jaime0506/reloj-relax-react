import { useEffect, useState } from "react"

// Tengo que pasarle el tipo de dato que va a a contener el optionsFormatDate
// porque no lo reconoce si lo paso sin tipo al toLocaleTimeString
const optionsFormatDate: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    // Esto hará que el formato sea de 12 horas
}

export const Clock = () => {

    const [time, setTime] = useState<string>()

    useEffect(() => {
        const updateTime = () => {
            const date = new Date()
            const dateLocal = date.toLocaleTimeString('en-US', optionsFormatDate);

            setTime(dateLocal)
        }

        updateTime()

        const interval = setInterval(() => {
            updateTime();
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <h1 className="text-white text-6xl" style={{ fontFamily: "Share Tech Mono" }}>{time}</h1>
    )
}
