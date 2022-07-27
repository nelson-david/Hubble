import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMG_URL } from "../../config";

const SingleTvCard = ({tv}) => {
    return (
        <>
            <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Link to={`/tv/${tv.id}`} className="singlemovie__card" title={tv.name} data-aos="flip-down">
                    <img
                        data-src={`${IMG_URL}/w500${tv.poster_path}`}
                        alt={tv.name}
                        className="lazyload"
                    />
                    <div className="singlemovie__cardbody">
                        <h3
                            className="movie__title"
                            title={tv.name}
                        >
                            {tv.name}
                        </h3>
                        <ul className="movie__details">
                            <li>Runtime: <span>1hr 20m</span></li>
                            <li>Rating: <span>{String(tv.vote_average).slice(0,3)}/10</span></li>
                        </ul>
                    </div>
                </Link>
            </motion.div>
        </>
    )
}

export default SingleTvCard;