import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            { showModal && (
                <motion.div
                    className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1>Hello World Application</motion.h1>
                    <motion.button onClick={() => setShowModal(false)}>Close Button</motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;