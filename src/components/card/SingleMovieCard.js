import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMG_URL } from "../../config";
import { useLongPress } from 'use-long-press';
import MovieModal from "../modal/MovieModal";
import { useCallback, useState } from "react";

const SingleMovieCard = ({movie, disabledHover}) => {
    
    const [showModal, setShowModal] = useState(false);
    const enabled = true;

    const callback = useCallback(event => {
        setShowModal(true);
    }, []);

    const previewMovie = useLongPress(enabled ? callback : null, {
        onFinish: event => console.log(''),
        onMove: event => console.log(''),
        threshold: 600,
        captureEvent: true,
        cancelOnMovement: true,
        detect: 'both'
    });

    const disableRightClick = (e) => {
        e.preventDefault();
    }
    
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
                onContextMenu={disableRightClick}
            >
                <Link
                    to={`/movies/${movie.id}`}
                    className="singlemovie__card"
                    title={movie.title}
                    data-aos="fade-in"
                    onContextMenu={disableRightClick}
                >
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
                onContextMenu={disableRightClick}
            >
                <Link
                    to={`/movies/${movie.id}`}
                    className="singlemovie__card"
                    title={movie.title}
                    data-aos="fade-in"
                    onContextMenu={disableRightClick}
                >
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