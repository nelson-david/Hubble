import { AnimatePresence, motion } from "framer-motion";
import { IMG_URL } from "../../config";

const MovieModal = ({ showModal, setShowModal, movie }) => {
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
                            data-src={`${IMG_URL}/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="lazyload"
                        />
                        <div className="singlemovie__cardbody modal_design">
                            <h3
                                className="movie__title"
                                title={movie.title}
                            >
                                {movie.title}
                            </h3>
                            <ul className="movie__details">
                                <li>Viewer: <span>{movie.adult===true?<>PG-13</>:<>General</>}</span></li>
                                <li>Rating: <span>{String(movie.vote_average).slice(0,3)}/10</span></li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MovieModal;