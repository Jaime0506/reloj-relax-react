import { useEffect, useState } from "react"
import { Timer } from "../../types"
import { separateMinutesFromSeconds } from "../../helpers"

export const PomodoroItem = ({ pomodoro }: Timer) => {

    const [time, setTime] = useState(pomodoro)

    useEffect(() => {

        if (time.minute != null && time.seconds != null) {
            let totalTime = time.minute * 60 + time.seconds

            const interval = setInterval(() => {
                totalTime--;

                if (totalTime <= 0) {
                    clearInterval(interval);
                    console.log("¡Tiempo agotado!");
                } else {
                    // Singinifica que podemos seguir restando al tiempo segundos
                    // Necesito entonces convertir los segundos nuevamente en el formato que llegaron
                    
                    const {wholePart, decimalPart} = separateMinutesFromSeconds(totalTime)
                    
                    

                    // setTime({
                    //     ...time,
                    //     minute: wholePart,
                    //     seconds: decimalPart
                    // })
                }
            }, 1000)
        }

        console.log(time)
    }, [time])

    return (
        <article className="w-[292px] rounded bg-white shadow-sm p-4">
            <p className="text-lg">{pomodoro.minute != undefined && pomodoro.minute > 9 ? pomodoro.minute : "0" + pomodoro.minute} : 00</p>
        </article>
    )
}
