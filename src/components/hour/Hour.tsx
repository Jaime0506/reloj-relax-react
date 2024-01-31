import { useEffect, useState } from "react"
// import { useResizeWindow } from "../../hooks"

interface HourProps {
    isOpenModalClock: boolean
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

export const Hour = ({ isOpenModalClock }: HourProps) => {

    const [time, setTime] = useState<string>()
    // const { width } = useResizeWindow()

    useEffect(() => {
        const updateTime = () => {
            const date = new Date()
            const dateLocal = date.toLocaleTimeString('en-US', optionsFormatDate);

            setTime(dateLocal)
        }

        // Se llama la funcion dependiendo si esta abierto o cerrado el modal,
        // para que cuando este abierto el modal se evite la re-rendirazion del componentes
        // ya que el usuario no lo puede ver
        if (!isOpenModalClock) {
            updateTime()
        }

        const interval = setInterval(() => {
            !isOpenModalClock && updateTime();
        }, 1000)

        return () => clearInterval(interval)
    }, [isOpenModalClock])

    return (
        // Pendiente nivel de proporcion de acuerdo al ancho del dispositivo
        <h1 className="text-white text-9xl" style={{ fontFamily: "Share Tech Mono" }}>{time}</h1>
    )
}
