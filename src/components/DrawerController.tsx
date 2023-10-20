import { motion, AnimatePresence } from 'framer-motion'

import { useWidth } from '../hooks'
import { Drawer } from './Drawer'
import { widthDrawerController } from '../helpers'

interface Props {
    isOpen: boolean
}

export const DrawerController = ({ isOpen}: Props) => {

    const { width } = useWidth()
   
    return (
        <AnimatePresence>
            {isOpen &&
                <motion.div
                    key="drawer"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: isOpen ? widthDrawerController(width) : 0 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Drawer />
                </motion.div>
            }
        </AnimatePresence>
    )
}
