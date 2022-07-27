// import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchModal from "../modal/SearchModal";

const Navbar = ({  redirect, setRedirect, searchText, setSearchText }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <nav className="custom__nav">
            <SearchModal
                showModal={showModal}
                setShowModal={setShowModal}
                redirect={redirect}
                setRedirect={setRedirect}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <ul>
                <li>
                    <Link
                        to="/"
                        onClick={(e) => {e.preventDefault(); setShowModal(!showModal)}}
                        title="Sidebar Icon"
                    >
                        search
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="title"
                        title="App Title"
                    >
                        Hubble
                    </Link>
                </li>
                <li>
                    <Link
                        to="/movies"
                        title="Movies Icon"
                    >
                        movies
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;