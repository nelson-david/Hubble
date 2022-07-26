import { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import axios from "axios";
import SingleMovieCard from "../components/card/SingleMovieCard";
import { API_KEY, API_URL } from "../config";
import Loader from '../components/loader/Loader';
import { Link } from 'react-router-dom';

const LandingPage = () => {

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
            {
                loading.inProgress?
                <Loader
                    loadingStyle="basic"
                    failed={loading.failed}
                />
                :
                <>
                <section className="landingpage__header">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7">
                            <div className="header__section">
                                <span className="minititle"><i>{movies[15].adult===true?<>PG-13</>:<>General</>}</i> {movies[15].release_date.split("-")[0]}</span>
                                <h1 className="title">{movies[15].title}</h1>
                                <p className="subtitle"></p>
                                <div className="movie__ratings">
                                    <Link to={`/movies/${movies[15].id}`}>HUBBLE</Link>
                                    <span>{movies[15].vote_average}<i>/10</i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="headerimg__div">
                            </div>
                        </div>
                    </div>
                </section>
                <section className="movies__foryou">
                    <h3 className="title first">
                        Movies For You
                    </h3>

                    <div className="row d-flex">
                        <ScrollContainer className="lastestmovies__scroll">
                        {
                            movies.map((movie, index) => {
                                return (
                                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-7 custom__col" key={index}>
                                        <SingleMovieCard
                                            movie={movie}
                                            key={index}
                                        />
                                    </div>
                                )
                            })
                        }
                        </ScrollContainer>
                    </div>
                    <div className="seemore__div">
                        <Link to="/movies">See More</Link>
                    </div>
                </section>
                <br />
                </>
            }
        </>
    )
}

export default LandingPage;