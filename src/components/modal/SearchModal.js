import { AnimatePresence, motion } from "framer-motion";
import { Navigate } from "react-router-dom";

const SearchModal = ({ showModal, setShowModal, setRedirect, redirect, setSearchText, searchText }) => {

    const searchData = (e) => {
        e.preventDefault();
        setShowModal(false);
        setRedirect(true);
    }

    return (
        <AnimatePresence>
            {redirect?<Navigate to={`/search?q=${searchText}`} />:''}
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
                                    value={searchText===null?"":searchText}
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