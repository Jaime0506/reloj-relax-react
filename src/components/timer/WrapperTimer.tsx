import { Timer } from "./"

export const WrapperTimer = () => {
    return (
        <main className="bg-red-500 flex flex-1 p-2">
            <section className="bg-black flex flex-1">

            </section>

            <section className="bg-white flex flex-1">
                <Timer />
            </section>
        </main>
    )
}
