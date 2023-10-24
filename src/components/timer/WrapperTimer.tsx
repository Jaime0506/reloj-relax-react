import { Timer } from "./"

export const WrapperTimer = () => {
    return (
        <>
            <main className="rounded-md flex flex-col p-2 w-full justify-center items-center gap-3">
                <section className="bg-white flex flex-1 flex-row w-full justify-center items-center">
                    <Timer type="focus" />
                    <Timer type="relax" />
                </section>

                <button className="p-1 text-white bg-green-600 rounded-sm w-full hover:bg-green-500">SAVE</button>
            </main>
        </>
    )
}
