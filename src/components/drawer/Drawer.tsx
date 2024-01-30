import { motion } from 'framer-motion'

export const Drawer = () => {

    return (
        <motion.section className="bg-green p-4" >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                Hola emote pa todos
            </motion.div>
        </motion.section>
    )
}
