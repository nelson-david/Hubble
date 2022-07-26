import axios from "axios";
import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import HottestMovieCard from "../components/card/HottestMovieCard";
import SingleMovieCard from "../components/card/SingleMovieCard";
import Loader from "../components/loader/Loader";
import { API_KEY, API_URL } from "../config";
import TrendingMovies from "./TrendingMovies";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState({
        inProgress: true,
        failed: false,
    });

    useEffect(() => {
		axios({
			method:"GET",
			url: `${API_URL}/movie/popular?api_key=${String(API_KEY)}`,
		})
		.then((res) => {
            if (res.status===200){
                const movieData = res.data.results.slice(0, 20);
                setMovies(movieData);
                setLoading({inProgress: false, failed: false});
            }
		})
		.catch((error) => {
            setLoading({inProgress: true, failed: true});
		})
    }, [])

    return (
        <>
            <section className="movies__section">
            {
                loading.inProgress?
                <Loader
                    loadingStyle="basic"
                    failed={loading.failed}
                />:
                <>
                    <div className="movieheader__div">
                        <div className="row">
                            <div className="col-lg-5 col-md-8 p-0" id="hottestmovie__col">
                                <HottestMovieCard
                                    movie={movies[15]}
                                />
                            </div>
                            <div className="col-lg-7 col-md-4">
                                <div className="row">
                                {
                                    movies.slice(0, 4).map((movie, index) => {
                                        return (
                                            <div className="col-lg-6 col-md-12 col-sm-6 custom2__col" key={index}>
                                                <SingleMovieCard
                                                    movie={movie}
                                                    disabledHover={true}
                                                />
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row d-flex">
                            <ScrollContainer className="lastestmovies__scroll">
                            {
                                movies.slice(4).map((movie, index) => {
                                    return (
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-7 custom__col" key={index}>
                                            <SingleMovieCard
                                                movie={movie}
                                            />
                                        </div>
                                    )
                                })
                            }
                            </ScrollContainer>
                        </div>
                        <br />
                        <h3
                            className="title"
                            style={{
                                color: "var(--white)",
                                fontSize: "22px",
                                padding: "0px 10px"
                            }}
                        >
                            Trending Movies
                        </h3>

                        <TrendingMovies />
                    </div>
                </>
            }
            </section>
        </>
    )
}

export default Movies;