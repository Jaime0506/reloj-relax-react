interface TimeOutAlertProps {
    closeModal: () => void
    // audio: HTMLAudioElement
}

export const TimeOutAlert = ({ closeModal }: TimeOutAlertProps) => {
    return (
        <main className="p-4 rounded bg-white w-[230px] flex flex-col justify-center items-center pt-9 text-center">
            <i className="fa-solid fa-bell text-green-500 fa-shake" style={{ fontSize: "100px" }}></i>

            <p className="">Relajate, tomate un descando te lo mereces 😘</p>
            <button onClick={closeModal} className="bg-green-500 p-2 rounded mt-4 w-full text-white">OK</button>
        </main>
    )
}
