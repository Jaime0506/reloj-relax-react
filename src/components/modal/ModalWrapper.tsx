import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { useUiStore } from '../../hooks'
import { Modal } from '..'

interface Props {
    children: ReactNode
}

export const ModalWrapper = ({ children }: Props) => {

    const { modal, handleCloseModal } = useUiStore()

    return (
        <AnimatePresence>
            {modal.isOpen && (
                <motion.section
                    className="absolute top-0 flex bg-gray-950 bg-opacity-50 w-screen h-screen flex-col justify-center items-center"
                    onClick={handleCloseModal}
                    initial={{ opacity: 0, position: 'absolute', y: 100 }}
                    animate={{ opacity: 1, position: 'absolute', y: 0 }}
                    exit={{ opacity: 0, position: 'absolute', y: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <Modal >
                        {children}
                    </Modal>
                </motion.section>
            )}
        </AnimatePresence>
    )
}
