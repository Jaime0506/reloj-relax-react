import { closeModal, openModal, toggleModal } from "../store/ui"
import { useAppDispatch, useAppSelector } from "./useStore"

export const useUiStore = () => {
    const { modal } = useAppSelector(state =>  state.ui)
    const dispatch = useAppDispatch()
    
    const handleOpenModal = () => {
        dispatch(openModal())
    }

    const handleCloseModal = () => {
        dispatch(closeModal())
    }
    
    const handleToggleModal = () => {
        dispatch(toggleModal())
    }

    return {
        // Properties
        modal,

        // Methods
        handleOpenModal,
        handleCloseModal,
        handleToggleModal
    }
}