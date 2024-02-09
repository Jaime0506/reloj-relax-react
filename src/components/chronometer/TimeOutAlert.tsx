import { TypeChronometer } from "../../types"

interface TimeOutAlertProps {
    closeModal: (type: TypeChronometer) => void
    type: TypeChronometer
}

export const TimeOutAlert = ({ closeModal, type }: TimeOutAlertProps) => {

    if (type === "work") {
        return (
            <main className="p-4 rounded bg-white w-[230px] flex flex-col justify-center items-center pt-9 text-center">
                <i className="fa-solid fa-bell text-green-500 fa-shake text-[100px]"></i>

                <p className="">Relajate, tomate un descando te lo mereces 😘</p>
                <button onClick={() => closeModal(type)} className="bg-green-500 p-2 rounded mt-4 w-full text-white">OK</button>
            </main>
        )
    } else {
        return (
            <main className="p-4 rounded bg-white w-[230px] flex flex-col justify-center items-center text-center" >
                <i className="fa-regular fa-money-bill-1 fa-bounce text-green-500 text-[100px]"></i>

                <p>Bien hecho 😎, Continua cumpliendo tus objetivos...</p>
                <button onClick={() => closeModal(type)} className="bg-green-500 p-2 rounded mt-4 w-full text-white">LET'S GO</button>
            </main>
        )
    }
}
