import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../config";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../components/loader/Loader';
import axios from "axios";
import InfiniteLoader from "../components/loader/InfiniteLoader";
import SingleTvCard from "../components/card/SingleTvCard";

const TrendingTvShow = () => {
    
    const [trendingTvShows, setTrendingTvShows] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState({
        inProgress: true,
        failed: false,
    });

    const fetchShow = () => {
        const endpoint = `${API_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US&page=${page+1}`

		axios({
			method: "GET",
			url: endpoint,
		})
		.then((res) => {
            const movieData = res.data.results;
            setTrendingTvShows([...trendingTvShows,...movieData]);
            setPage(res.data.page);
		})
		.catch((error) => {
            setLoading({inProgress: true, failed: true});
		})
    }

    useEffect(() => {
		axios({
			method:"GET",
			url: `${API_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US&page=1`,
		})
		.then((res) => {
            if (res.status===200){
                const movieData = res.data.results.slice(5, 13);
                setTrendingTvShows(movieData);
                setPage(res.data.page)
                setLoading({inProgress: false, failed: false});
            }
		})
		.catch(() => {
            setLoading({inProgress: true, failed: true});
		})
    }, [])

    return (
        <div className="trending__movies">
        {
            loading.inProgress?
            <Loader
                loadingStyle="basic"
                failed={loading.failed}
            />
            :
            <InfiniteScroll
                dataLength={trendingTvShows.length}
                next={fetchShow}
                hasMore={true}
                loader={<InfiniteLoader />}
                className="infiniteScroll"
            >
                <div className="row">
                {
                    trendingTvShows.map((tv, index) => {
                        return (
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 p-0" key={index}>
                                <SingleTvCard
                                    tv={tv}
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
        </div>
    )
}

export default TrendingTvShow;