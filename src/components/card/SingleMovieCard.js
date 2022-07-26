import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMG_URL } from "../../config";

const SingleMovieCard = ({movie, disabledHover}) => {
    
    return (
        <>
        {
            disabledHover?
            <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Link to={`/movies/${movie.id}`} className="singlemovie__card" title={movie.title} data-aos="flip-down">
                    <img
                        src={`${IMG_URL}/w500${movie.poster_path}`}
                        alt={movie.title}
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
                            <li>Runtime: <span>1hr 20m</span></li>
                            <li>Rating: <span>{String(movie.vote_average).slice(0,3)}/10</span></li>
                        </ul>
                    </div>
                </Link>
            </motion.div>
            :
            <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
            >
                <Link to={`/movies/${movie.id}`} className="singlemovie__card" title={movie.title} data-aos="flip-down">
                    <img
                        src={`${IMG_URL}/w500${movie.poster_path}`}
                        alt={movie.title}
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
                            <li>Duration: <span>1hr 20m</span></li>
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