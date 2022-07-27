import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Navigate } from "react-router-dom";
import SingleMovieCard from "../components/card/SingleMovieCard";
import InfiniteLoader from "../components/loader/InfiniteLoader";
import Loader from "../components/loader/Loader";
import { API_KEY, API_URL } from "../config";

const Search = ({ setRedirect, searchText }) => {

    const [results, setResults] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState({
        inProgress: true,
        failed: false,
    });

    const fetchSearch = () => {
        const endpoint = `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchText}&page=${page+1}`;

		axios({
			method: "GET",
			url: endpoint,
		})
		.then((res) => {
            const movieData = res.data.results;
            setResults([...results,...movieData]);
            setPage(res.data.page);
		})
		.catch((error) => {
            setLoading({inProgress: true, failed: true});
		})
    }

    useEffect(() => {
        setRedirect(false);
        setLoading({inProgress: true, failed: false});

        axios({
            method:"GET",
            url: `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchText}&page=1`,
        })
        .then((res) => {
            setResults(res.data.results);
            setLoading({inProgress:false, failed: false})
        })
        .catch((error) => {
            setLoading({inProgress:true, failed: true})
        })

    }, [setRedirect, searchText])

    return (
        <div className="search__div">
        {
            searchText===null?
            <Navigate to="/" />
            :
            <>
            <h3 className="header__text">{searchText}</h3>
            <br />
            {
                loading.inProgress?
                <Loader loadingStyle="basic" failed={loading.failed} />
                :
                <InfiniteScroll
                    dataLength={results.length}
                    next={fetchSearch}
                    hasMore={true}
                    loader={<InfiniteLoader />}
                    className="infiniteScroll"
                >
                    <div className="row">
                    {
                        results.map((movie, index) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6" key={index}>
                                    <SingleMovieCard
                                        movie={movie}
                                        key={index}
                                        disabledHover={true}
                                    />
                                </div>
                            )
                        })
                    }
                    </div>
                </InfiniteScroll>
            }
            </>
        }
        </div>
    )
}

export default Search;