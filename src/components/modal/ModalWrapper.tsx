import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Modal } from '..'

interface Props {
    children: ReactNode
    isOpen: boolean
    closeModal: () => void
    bgColor: string
}

export const ModalWrapper = ({ children, isOpen, closeModal, bgColor }: Props) => {

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.section
                    className="absolute top-0 flex bg-gray-950 bg-opacity-50 w-screen h-screen flex-col justify-center items-center"
                    onClick={closeModal}
                    initial={{ opacity: 0, position: 'absolute', y: 100 }}
                    animate={{ opacity: 1, position: 'absolute', y: 0 }}
                    exit={{ opacity: 0, position: 'absolute', y: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <Modal bgColor={bgColor}>
                        {children}
                    </Modal>
                </motion.section>
            )}
        </AnimatePresence>
    )
}
