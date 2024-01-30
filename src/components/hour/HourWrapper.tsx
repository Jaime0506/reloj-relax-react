import { Hour } from "./Hour"

interface HourWrapper {
    isOpenModal: boolean
}
// Este componente envuelve el Clock ya que este al estar re-renderizando constantamente esta actualizando todo mi App.tsx
// y solo quiero que re renderize ese pequeño componente
export const HourWrapper = ({ isOpenModal }: HourWrapper) => {
    return (
        <Hour isOpenModal={isOpenModal} />
    )
}
