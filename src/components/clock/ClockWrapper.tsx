import { Clock } from "./Clock"

// Este componente envuelve el Clock ya que este al estar re-renderizando constantamente esta actualizando todo mi App.tsx
// y solo quiero que re renderize ese pequeño componente
export const ClockWrapper = () => {
    return (
        <Clock />
    )
}
