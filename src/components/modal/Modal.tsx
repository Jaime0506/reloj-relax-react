import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Modal = ({ children }: Props) => {

    // Como mi Modal esta contenido en mi WrapperModal, al yo definir un onClick a mi WrapperModal
    // ese onClcik se va a disparar cuando haga click en mi modal porque la propagacion del evento
    // onClick llega hasta mi modal, cuya cosa no quiero, para esto tengo que manejar el evento onClick de mi
    // Modal, capturar el evento onClick y tener la propagacion a sus nodos padres en este caso WrapperModal
    const handleModalClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        // Evita la propagación del clic hacia arriba
        e.stopPropagation(); 
    }

    return (
        <main 
            className='bg-white p-4 rounded-md flex max-w-xs min-w-max' 
            onClick={handleModalClick}
        >
            {children}
        </main>
    )
}
