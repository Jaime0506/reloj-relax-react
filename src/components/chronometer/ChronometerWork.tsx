import { useChronometerStore } from "../../hooks"
import { Chronometer } from "./"

export const ChronometerWork = () => {
    const { onDeleteTimer, timer } = useChronometerStore()

    const { minutes, seconds } = timer.work

    const handleOnDeleteTimer = () => {
        if (timer.uid) {
            alert("PORFIS ES ENTENDIBLE EL PROYECTO")
        }
    }

    if (typeof minutes != "number" || typeof seconds != "number") return null

    return (
        <section className="w-[400px] rounded bg-white shadow-sm p-4 flex mt-8 ">
            <header className="flex-1">
                <Chronometer callback={handleOnDeleteTimer} minutes={minutes} seconds={seconds} />
            </header>

            <footer className="">
                <i
                    className="fa-solid fa-circle-xmark text-xl hover:cursor-pointer text-red-500"
                    onClick={() => handleOnDeleteTimer()}
                ></i>
            </footer>
        </section>

    )
}