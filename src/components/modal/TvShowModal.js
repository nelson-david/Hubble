import { AnimatePresence, motion } from "framer-motion";
import { IMG_URL } from "../../config";

const TvShowModal = ({ showModal, setShowModal, tv }) => {
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
                    <motion.div onClick={(e) => {e.stopPropagation();}} className="custom__modal movie_preview">
                        <img
                            data-src={`${IMG_URL}/w500${tv.poster_path}`}
                            alt={tv.name}
                            className="lazyload"
                        />
                        <div className="singlemovie__cardbody modal_design">
                            <h3
                                className="movie__title"
                                title={tv.name}
                            >
                                {tv.name}
                            </h3>
                            <ul className="movie__details">
                                <li>Viewer: <span>{tv.adult===true?<>PG-13</>:<>General</>}</span></li>
                                <li>Rating: <span>{String(tv.vote_average).slice(0,3)}/10</span></li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default TvShowModal;