import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../config";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../components/loader/Loader';
import axios from "axios";
import SingleMovieCard from "../components/card/SingleMovieCard";
import InfiniteLoader from "../components/loader/InfiniteLoader";

const SingleGenre = () => {

    const genreID = window.location.pathname.split("/")[2];
    const [movies, setMovies] = useState({});
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState({
        inProgress: true,
        failed: false,
    });

    const fetchMovies = () => {
        const endpoint = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreID}&page=${page+1}`

		axios({
			method: "GET",
			url: endpoint,
		})
		.then((res) => {
            const movieData = res.data.results;
            setMovies([...movies,...movieData]);
            setPage(res.data.page);
		})
		.catch((error) => {
            setLoading({inProgress: true, failed: true});
		})
    }

    useEffect(() => {
		axios({
			method:"GET",
			url: `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreID}&page=1`,
		})
		.then((res) => {
            if (res.status===200){
                const movieData = res.data.results.slice(5, 13);
                setMovies(movieData);
                setPage(res.data.page)
                setLoading({inProgress: false, failed: false});
            }
		})
		.catch((error) => {
            setLoading({inProgress: true, failed: true});
		})
    }, [genreID])

    return (
        <section className="movies__section">
            <br />
        {
            loading.inProgress?
            <Loader
                loadingStyle="basic"
                failed={loading.failed}
            />
            :
            <InfiniteScroll
                dataLength={movies.length}
                next={fetchMovies}
                hasMore={true}
                loader={<InfiniteLoader />}
                className="infiniteScroll"
            >
                <div className="row">
                {
                    movies.map((movie) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 p-0" key={movie.id}>
                                <SingleMovieCard
                                    movie={movie}
                                    disabledHover={true}
                                />
                            </div>
                        )
                    })
                }
                </div>
            </InfiniteScroll>
        }
        </section>
    )
}

export default SingleGenre;