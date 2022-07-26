import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const OfflineBar = () => {
    const [offline, setOffline] = useState(true);

    return (
        <>
        {
            offline?
            <motion.div
                className="networkToast"
                initial={{ opacity: 0 }}
                animate={{ opacity: 2}}
                exit={{ opacity: 0 }}
            >
                <motion.div>
                    <motion.p>
                        You are currently offline! <motion.span onClick={() => setOffline(false)}><FaTimes /></motion.span>
                    </motion.p>
                </motion.div>
            </motion.div>:''
        }
        </>
    )
}

export default OfflineBar;