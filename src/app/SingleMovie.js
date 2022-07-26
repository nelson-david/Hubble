import { useEffect, useState } from "react";
import withRouter from "../components/libs/withRouter";
import axios from "axios";
import { API_KEY, API_URL } from "../config";
import Loader from "../components/loader/Loader";
import SingleCastCard from "../components/card/SingleCastCard";
import ScrollContainer from "react-indiana-drag-scroll";
import ReactPlayer from 'react-player';
import SingleMovieHeader from "../components/card/SingleMovieHeader";

const SingleMovie = () => {

    const movieID = window.location.pathname.split("/")[2];
    const [movie, setMovie] = useState({});
    const [movieCasts, setMovieCasts] = useState([]);
    const [movieCrews, setMovieCrews] = useState([]);
    const [trailerURL, setTrailerURL] = useState(false);
    const [loading, setLoading] = useState({
        inProgress: true,
        failed: false,
    });

    useEffect(() => {
        window.scrollTo(0,0);

        axios({
            method:"GET",
            url: `${API_URL}/movie/${movieID}?api_key=${API_KEY}`,
        })
        .then((res) => {
            if (res.status===200){
                setMovie(res.data);
                axios
                    .get(`${API_URL}/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`)
                    .then((res) => {
                        setTrailerURL(res.data.results[0].key);
                    })
                    .catch(() => {
                        setLoading({inProgress: true, failed: true});
                    });
                axios
                    .get(`${API_URL}/movie/${movieID}/credits?api_key=${API_KEY}`)
                    .then((res) => {
                        setMovieCasts(res.data.cast.slice(0, 9));
                        setMovieCrews(res.data.crew.slice(4, 8));
                        setLoading({inProgress: false, failed: false});
                    })
                    .catch((err) => {
                        setLoading({inProgress: true, failed: true});
                    });
            }
        })
        .catch(() => {
            setLoading({inProgress: true, failed: true});
        })
    }, [movieID])

    return (
        <section className="movies__section">
        {
            loading.inProgress?
            <Loader
                loadingStyle="basic"
                failed={loading.failed}
            />
            :
            <div className="movieheader__div">
                <div className="row">
                    <div className="col-12">
                        <SingleMovieHeader
                            movie={movie}
                            movieCrews={movieCrews}
                        />
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="movie__casts">
                                    <h3>Top Billed Cast</h3>
                                    <div className="row">
                                        <ScrollContainer className="lastestmovies__scroll cast__scroll">
                                        {
                                            movieCasts.map((cast) => {
                                                return (
                                                <div className="col-xl-3 col-lg-5 col-sm-5 col-8" key={cast.id}>
                                                    <SingleCastCard
                                                        cast={cast}
                                                    />
                                                </div>
                                                )
                                            })
                                        }
                                        </ScrollContainer>
                                    </div>
                                </div>
                                <div className="movie__trailer">
                                    {
                                        trailerURL?
                                        <>
                                            <h3>Watch the Trailer Now!</h3>
                                            <div>
                                                <ReactPlayer
                                                    url={`https://www.youtube.com/watch?v=${trailerURL}`}
                                                    width='100%'
                                                    height='100%'
                                                />
                                            </div>
                                        </>:
                                        <h3>No Trailer for this Movie</h3>
                                    }
                                    <br /><br />
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="moviemore__info">
                                    <ul>
                                        <li>
                                            <h4>Status</h4>
                                            <p>{movie.status}</p>
                                        </li>
                                        <li>
                                            <h4>Original Language</h4>
                                            <p>English</p>
                                        </li>
                                        <li>
                                            <h4>Budget</h4>
                                            <p>${movie.budget}</p>
                                        </li>
                                        <li>
                                            <h4>Revenue</h4>
                                            <p>${movie.revenue}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </section>
    )
}

export default withRouter(SingleMovie);