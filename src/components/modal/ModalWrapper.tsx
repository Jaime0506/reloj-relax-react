import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { useUiStore } from '../../hooks'
import { Modal } from '..'

interface Props {
    children: ReactNode
}

export const ModalWrapper = ({ children }: Props) => {

    const { modal, handleCloseModal } = useUiStore()

    if (!modal.isOpen) return null

    return (
        <AnimatePresence>
            <motion.section
                className="absolute top-0 flex bg-gray-950 bg-opacity-50 w-screen h-screen flex-col justify-center items-center"
                onClick={handleCloseModal}
            >
                <Modal >
                    {children}
                </Modal>
            </motion.section>
        </AnimatePresence>
    )
}
