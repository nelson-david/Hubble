import axios from "axios";
import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import SingleTvCard from "../components/card/SingleTvCard";
import Loader from "../components/loader/Loader";
import { API_URL, API_KEY } from "../config";
import TrendingTvShow from "./TrendingTvShow";

const TvShow = () => {
    const [tvShows, setTVShows] = useState([]);
    const [loading, setLoading] = useState({
        inProgress: true,
        failed: false,
    });

    useEffect(() => {
		axios({
			method:"GET",
			url: `${API_URL}/tv/popular?api_key=${String(API_KEY)}`,
		})
		.then((res) => {
            if (res.status===200){
                const movieData = res.data.results.slice(0, 20);
                console.log(movieData)
                setTVShows(movieData);
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
                            <div className="col-lg-12">
                                <div className="row">
                                {
                                    tvShows.slice(0, 4).map((tv, index) => {
                                        return (
                                            <div className="col-lg-3 col-md-4 col-sm-6 custom2__col" key={index}>
                                                <SingleTvCard
                                                    tv={tv}
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
                                tvShows.slice(4).map((tv, index) => {
                                    return (
                                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-7 custom__col" key={index}>
                                            <SingleTvCard
                                                tv={tv}
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
                            Trending Tv Show
                        </h3>

                        <TrendingTvShow />
                    </div>
                </>
            }
            </section>
        </>
    )
}

export default TvShow;