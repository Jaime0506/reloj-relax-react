import { motion } from 'framer-motion'

export const Drawer = () => {

    // esto envuelve el contenigo que va a tener el Drawer
    return (
        <motion.section className="bg-green p-4" >
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                Hola mi gnete
            </motion.div>
        </motion.section>
    )
}
