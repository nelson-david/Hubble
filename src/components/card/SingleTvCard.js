import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMG_URL } from "../../config";
import { useState } from "react";
import TvShowModal from "../modal/TvShowModal";
import { useLongPress } from 'use-long-press';

const SingleTvCard = ({tv}) => {

    const [showModal, setShowModal] = useState(false);

    const previewTvShow = useLongPress(() => {
        setShowModal(true);
    });

    return (
        <>
            <TvShowModal
                showModal={showModal}
                setShowModal={setShowModal}
                tv={tv}
            />
            <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                {...previewTvShow()}
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