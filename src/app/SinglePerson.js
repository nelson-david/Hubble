import axios from "axios";
import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import SingleMovieCard from "../components/card/SingleMovieCard";
import Loader from "../components/loader/Loader";
import { API_KEY, API_URL, IMG_URL } from "../config";

const SinglePerson = () => {

    const personID = window.location.pathname.split("/")[2];
    const [person, setPerson] = useState({});
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState({
        inProgress: true,
        failed: false,
    });

    const stringToYear = (date) => {
        return parseInt(new Date().getFullYear())-parseInt(date.split("-")[0]);
    }

    useEffect(() => {
        window.scrollTo(0,0);

        axios({
            method:"GET",
            url: `${API_URL}/person/${personID}?api_key=${API_KEY}`,
        })
        .then((res) => {
            if (res.status===200){
                setPerson(res.data);
                axios({
                    method:"GET",
                    url: `${API_URL}/person/${personID}/movie_credits?api_key=${API_KEY}`,
                })
                .then((res) => {
                    if (res.status===200){
                        setMovies(res.data.cast.slice(0, 8));
                        setLoading({inProgress: false, failed: false});
                    }
                })
                .catch(() => {
                    setLoading({inProgress: true, failed: true});
                })
            }
        })
        .catch(() => {
            setLoading({inProgress: true, failed: true});
        })
    }, [personID])

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
                    <div className="col-lg-3 col-md-4">
                        <div className="personbasic__data">
                            <img
                                src={`${IMG_URL}/w500${person.profile_path}`}
                                alt={person.name}
                                className="header__img"
                            />
                            <div>
                                <h3>Personal Info</h3>
                                <ul>
                                    <li>
                                        <h4>Known For</h4>
                                        <p>{person.known_for_department}</p>
                                    </li>
                                    <li>
                                        <h4>Gender</h4>
                                        <p>{person.gender===2?<>Male</>:<>Female</>}</p>
                                    </li>
                                    <li>
                                        <h4>Birthday</h4>
                                        <p>{person.birthday} ({stringToYear(person.birthday)} years old)</p>
                                    </li>
                                    <li>
                                        <h4>Place Of Birth</h4>
                                        <p>{person.place_of_birth}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="persondetail__data">
                            <h3>{person.name}</h3>
                            <br />
                            <h4>Biography</h4>
                            <p>{person.biography.slice(0, 700)}</p>

                            <div className="row d-flex">
                                <ScrollContainer className="lastestmovies__scroll single__person">
                                {
                                    movies.slice(4).map((movie, index) => {
                                        return (
                                            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-6 col-7 custom__col" key={index}>
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
                    </div>
                </div>
            </div>
        }
        </section>
    )
}

export default SinglePerson;