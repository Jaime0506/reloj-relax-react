import { motion, AnimatePresence } from 'framer-motion'

import { useResizeWindow } from '../../hooks'
import { Drawer } from './'
import { widthDrawerController } from '../../helpers'

interface DrawerWrapperProps {
    isOpenDrawer: boolean
}

export const DrawerWrapper = ({ isOpenDrawer }: DrawerWrapperProps) => {

    const { width } = useResizeWindow()

    return (
        <AnimatePresence>
            {isOpenDrawer &&
                <motion.div
                    key="drawer"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: isOpenDrawer ? widthDrawerController(width) : 0 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Drawer />
                </motion.div>
            }
        </AnimatePresence>
    )
}
