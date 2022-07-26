import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SearchModal = ({ showModal, setShowModal }) => {
    
    const [searchText, setSearchText] = useState("");

    const searchData = (e) => {
        e.preventDefault();
        console.log("TXT: ", searchText);
    }

    return (
        <AnimatePresence>
            { showModal && (
                <motion.div
                    className="fixed-top custom__backdrop"
                    onClick={() => setShowModal(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0 }}
                >
                    <motion.div onClick={(e) => {e.stopPropagation();}} className="custom__modal">
                        <form onSubmit={searchData}>
                            <div className="form-group">
                                <input
                                    className="form-control-lg custom__input"
                                    name="hubble-search"
                                    type="search"
                                    placeholder="Enter Your Search Here...."
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SearchModal;