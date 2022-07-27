import axios from "axios";
import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-router-dom";
import SingleMovieCard from "../components/card/SingleMovieCard";
import Loader from "../components/loader/Loader";
import { API_KEY, API_URL } from "../config";
import * as BsIcons from "react-icons/bs";

const Explore = () => {

    const [action, setAction] = useState([]);
    const [romance, setRomance] = useState([]);
    const [animation, setAnimation] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [crime, setCrime] = useState([]);
    const [horror, setHorror] = useState([]);
    const [sciFi, setSciFi] = useState([]);
    const [loading, setLoading] = useState({
        inProgress: true,
        failed: false,
    });

    useEffect(() => {
        // Action
		axios({
			method:"GET",
			url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&page=1`,
		})
		.then((res) => {
            const movieData = res.data.results.splice(0, 12);
            setAction(movieData);
		})
		.catch(() => {
            setLoading({inProgress: true, failed: true});
		})

        // Romance
		axios({
			method:"GET",
			url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US&page=1`,
		})
		.then((res) => {
            const movieData = res.data.results.splice(0, 12);
            setRomance(movieData);
		})
		.catch(() => {
            setLoading({inProgress: true, failed: true});
		})

        // Comedy
		axios({
			method:"GET",
			url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US&page=1`,
		})
		.then((res) => {
            const movieData = res.data.results.splice(0, 12);
            setComedy(movieData);
		})
		.catch(() => {
            setLoading({inProgress: true, failed: true});
		})

        // Animation
		axios({
			method:"GET",
			url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US&page=1`,
		})
		.then((res) => {
            const movieData = res.data.results.splice(0, 12);
            setAnimation(movieData);
		})
		.catch(() => {
            setLoading({inProgress: true, failed: true});
		})

        // Crime
		axios({
			method:"GET",
			url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=80&language=en-US&page=1`,
		})
		.then((res) => {
            const movieData = res.data.results.splice(0, 12);
            setCrime(movieData);
		})
		.catch(() => {
            setLoading({inProgress: true, failed: true});
		})

        // Horror
		axios({
			method:"GET",
			url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US&page=1`,
		})
		.then((res) => {
            const movieData = res.data.results.splice(0, 12);
            setHorror(movieData);
		})
		.catch(() => {
            setLoading({inProgress: true, failed: true});
		})

        // Sci-Fi
		axios({
			method:"GET",
			url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US&page=1`,
		})
		.then((res) => {
            const movieData = res.data.results.splice(0, 12);
            setSciFi(movieData);
            setLoading({inProgress: false, failed: false});
		})
		.catch(() => {
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
                <h3 className="discover-title">⭐ Discover ⭐</h3>
                
                <div className="explore__div">
                    <Link className="discover-link" to="/discover/28">Action <BsIcons.BsArrowRight /></Link>
                    <div className="row d-flex">
                        <ScrollContainer className="lastestmovies__scroll">
                        {
                            action.map((movie, index) => {
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

                    <Link className="discover-link" to="/discover/10749">Romance <BsIcons.BsArrowRight /></Link>
                    <div className="row d-flex">
                        <ScrollContainer className="lastestmovies__scroll">
                        {
                            romance.map((movie, index) => {
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

                    <Link className="discover-link" to="/discover/16">Animation <BsIcons.BsArrowRight /></Link>
                    <div className="row d-flex">
                        <ScrollContainer className="lastestmovies__scroll">
                        {
                            animation.map((movie, index) => {
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

                    <Link className="discover-link" to="/discover/35">Comedy <BsIcons.BsArrowRight /></Link>
                    <div className="row d-flex">
                        <ScrollContainer className="lastestmovies__scroll">
                        {
                            comedy.map((movie, index) => {
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
                    
                    <Link className="discover-link" to="/discover/80">Crime <BsIcons.BsArrowRight /></Link>
                    <div className="row d-flex">
                        <ScrollContainer className="lastestmovies__scroll">
                        {
                            crime.map((movie, index) => {
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

                    <Link className="discover-link" to="/discover/27">Horror <BsIcons.BsArrowRight /></Link>
                    <div className="row d-flex">
                        <ScrollContainer className="lastestmovies__scroll">
                        {
                            horror.map((movie, index) => {
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

                    <Link className="discover-link" to="/discover/878">Science Fiction <BsIcons.BsArrowRight /></Link>
                    <div className="row d-flex">
                        <ScrollContainer className="lastestmovies__scroll">
                        {
                            sciFi.map((movie, index) => {
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
                </div>
                </>
            }
            </section>
        </>
    )
}

export default Explore;