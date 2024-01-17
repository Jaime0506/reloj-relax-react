import { Clock } from "./Clock"

interface ClockWrapperProps {
    isOpen: boolean
}
// Este componente envuelve el Clock ya que este al estar re-renderizando constantamente esta actualizando todo mi App.tsx
// y solo quiero que re renderize ese pequeño componente
export const ClockWrapper = ({ isOpen }: ClockWrapperProps) => {
    return (
        <Clock isOpen={isOpen} />
    )
}
