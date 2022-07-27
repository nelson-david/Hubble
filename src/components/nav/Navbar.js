// import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchModal from "../modal/SearchModal";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import { motion } from "framer-motion";
import { useLongPress } from 'use-long-press';

const Navbar = ({  redirect, setRedirect, searchText, setSearchText, toggleDarkMode }) => {

    const [showModal, setShowModal] = useState(false);
    
    const toggle = useLongPress(() => {
        toggleDarkMode();
    });

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
                        title="Search"
                    >
                        <i><RiIcons.RiSearch2Line /></i>
                        <span>search</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/discover"
                        title="Explore"
                    >
                        <i><GiIcons.GiCompass /></i>
                        <span>explore</span>
                    </Link>
                </li>
                <motion.li
                    whileHover={{ scale: 1.13 }}
                    whileTap={{ scale: 0.9 }}
                    {...toggle()}
                >
                    <Link
                        to="/"
                        className="title"
                        title="Hubble"
                    >
                        Hubble
                    </Link>
                </motion.li>
                <li>
                    <Link
                        to="/tv"
                        title="TV Shows"
                    >
                        <i><RiIcons.RiTvLine /></i>
                        <span>tv shows</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/movies"
                        title="Movies"
                    >
                        <i><RiIcons.RiMovie2Line /></i>
                        <span>movies</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;