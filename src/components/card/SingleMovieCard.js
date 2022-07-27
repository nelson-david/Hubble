import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMG_URL } from "../../config";
import { useLongPress } from 'use-long-press';
import MovieModal from "../modal/MovieModal";
import { useState } from "react";

const SingleMovieCard = ({movie, disabledHover}) => {
    
    const [showModal, setShowModal] = useState(false);

    const previewMovie = useLongPress(() => {
        setShowModal(true);
    });
    
    return (
        <>
        <MovieModal
            showModal={showModal}
            setShowModal={setShowModal}
            movie={movie}
        />
        {
            disabledHover?
            <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                {...previewMovie()}
            >
                <Link to={`/movies/${movie.id}`} className="singlemovie__card" title={movie.title} data-aos="fade-in">
                    <img
                        data-src={`${IMG_URL}/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="lazyload"
                    />
                    <div className="singlemovie__cardbody">
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
                </Link>
            </motion.div>
            :
            <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                {...previewMovie()}
            >
                <Link to={`/movies/${movie.id}`} className="singlemovie__card" title={movie.title} data-aos="fade-in">
                    <img
                        data-src={`${IMG_URL}/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="lazyload"
                    />
                    <div className="singlemovie__cardbody">
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
                </Link>
            </motion.div>
        }
        </>
    )
}

export default SingleMovieCard;