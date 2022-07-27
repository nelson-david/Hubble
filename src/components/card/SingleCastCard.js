import { IMG_URL } from "../../config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SingleCastCard = ({cast}) => {

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
        >
            <Link to={`/person/${cast.id}`} className="singlecast__card">
                <img
                    data-src={`${IMG_URL}/w500${cast.profile_path}`}
                    alt={cast.name}
                    className="lazyload"
                />
                <div className="singlecast__cardbody">
                    <p>{cast.name}</p>
                    <span>{cast.character}</span>
                </div>
            </Link>
        </motion.div>
    )
}

export default SingleCastCard;