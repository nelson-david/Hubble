import { IMG_URL } from "../../config";
import { BsCircleFill } from "react-icons/bs";

const SingleMovieHeader = ({ movie, movieCrews }) => {

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

    function formatDate (date){
        return date.replace(/-/g, '/');
    }

    return (
        <div className="singlemovie__headercard">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-5">
                    <div>
                        <img
                            data-src={`${IMG_URL}/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="lazyload header__img"
                        />
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-7">
                    <div className="singlemovie__info">
                        <h3 className="title">
                            {movie.title} ({movie.release_date.split("-")[0]})
                        </h3>
                        <div className="facts">
                            <span className="certification">
                                {movie.adult===true?<>PG-13</>:<>General</>}
                            </span>
                            <span className="release">
                                {formatDate(movie.release_date)} ({movie.production_countries[0].iso_3166_1})
                            </span>
                            <BsCircleFill />
                            <span className="genres">
                                {movie.genres.map((genre) => {
                                    return(
                                        <a href="/" key={genre.id}>{genre.name}</a>
                                    )
                                })}
                            </span>
                            <BsCircleFill />
                            <span className="runtime">
                                {minuteToHour(movie.runtime)}
                            </span>
                            <span className="rating">
                                Rating - {movie.vote_average}/10
                            </span>
                        </div>
                        <div className="cardheader__info">
                            <i>{movie.tagline}</i>
                            <h4>Overview</h4>
                            <p>
                                {movie.overview}
                            </p>
                            <ol className="people no_image">
                            {
                                movieCrews.map((crew) => {
                                    return (
                                    <li className="profile" key={crew.id}>
                                        <p><a href="/person/930707-colin-trevorrow">{crew.name}</a></p>
                                        <p className="character">{crew.job}</p>
                                    </li>
                                    )
                                })
                            }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovieHeader;