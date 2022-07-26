import { Link } from "react-router-dom";
import { IMG_URL } from "../../config";

const HottestMovieCard = ({movie}) => {

    function minuteToHour(n){
        if (n===undefined){
            return "1hr 20m";
        }
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + "hr " + rminutes + "m";
    }

    return (
        <Link to={`/movies/${movie.id}`} className="hottestmovie__card">
            <img
                src={`${IMG_URL}/w500${movie.poster_path}`}
                alt={movie.title}
                className="header__img"
            />
            <div className="hottestmovie__cardbody">
                <h3
                    className="movie__title"
                    title={movie.title}
                >
                    {movie.title}
                </h3>
                <ul className="movie__details">
                    <li>Genre: <span>Action</span></li>
                    <li>Duration: <span>{minuteToHour(movie.runtime)}</span></li>
                    <li>Rating: <span>{movie.vote_average}/10</span></li>
                </ul>
            </div>
        </Link>
    )
}

export default HottestMovieCard;