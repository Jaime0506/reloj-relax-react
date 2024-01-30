import { useEffect, useState } from "react"

interface HourProps {
    isOpenModal: boolean
}

// Tengo que pasarle el tipo de dato que va a a contener el optionsFormatDate
// porque no lo reconoce si lo paso sin tipo al toLocaleTimeString
const optionsFormatDate: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    // Esto hará que el formato sea de 12 horas
}

export const Hour = ({ isOpenModal }: HourProps) => {

    const [time, setTime] = useState<string>()

    useEffect(() => {
        const updateTime = () => {
            const date = new Date()
            const dateLocal = date.toLocaleTimeString('en-US', optionsFormatDate);

            setTime(dateLocal)
        }

        // Se llama la funcion dependiendo si esta abierto o cerrado el modal,
        // para que cuando este abierto el modal se evite la re-rendirazion del componentes
        // ya que el usuario no lo puede ver
        if (!isOpenModal) {
            updateTime()
        }

        const interval = setInterval(() => {
            !isOpenModal && updateTime();
        }, 1000)

        return () => clearInterval(interval)
    }, [isOpenModal])

    return (
        <h1 className="text-white text-6xl" style={{ fontFamily: "Share Tech Mono" }}>{time}</h1>
    )
}
