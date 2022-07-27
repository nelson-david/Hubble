import React, { useEffect, lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Aos from "aos";
import Loader from "./components/loader/Loader";
import { Offline } from "react-detect-offline";
import OfflineBar from "./components/card/OfflineBar";
import SingleGenre from "./app/SingleGenre";

const NotFound = lazy(() => import('./pages/NotFound'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const SingleMovie = lazy(() => import('./app/SingleMovie'));
const Movies = lazy(() => import('./app/Movies'));
const SinglePerson = lazy(() => import('./app/SinglePerson'));
const TvShow = lazy(() => import('./app/TvShow'));
const Search = lazy(() => import('./app/Search'));
const SingleTv = lazy(() => import('./app/SingleTv'));
const Explore = lazy(() => import('./app/Explore'));

const App = () => {

	const [redirect, setRedirect] = useState(false);
	const [searchText, setSearchText] = useState(null);
	const [lightMode, setLightMode] = useState(window.localStorage.getItem("hubble_lightmode"));

	const toggleDarkMode = () => {
		if (lightMode===null){
			document.querySelector("body").style.backgroundColor = "white";
			document.querySelector("body").style.backgroundImage = "linear-gradient(0deg, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://res.cloudinary.com/ruthless-labs/image/upload/v1658892092/img4_pjm6um.webp')";
			window.localStorage.setItem("hubble_lightmode", "true");
			setLightMode("true");
		}else{
			document.querySelector("body").style.backgroundColor = "black";
			document.querySelector("body").style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,0.9), rgba(255,255,255,0.9)), url('https://res.cloudinary.com/ruthless-labs/image/upload/v1658892092/img4_pjm6um.webp')";
			window.localStorage.removeItem("hubble_lightmode");
			setLightMode(null);
		}
	}


	useEffect(() => {
		Aos.init({
			duration: "2000"
		})

		const lightmode = window.localStorage.getItem("hubble_lightmode");
		if (lightmode==="true"){
			document.querySelector("body").style.backgroundColor = "white";
			document.querySelector("body").style.backgroundImage = "linear-gradient(0deg, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://res.cloudinary.com/ruthless-labs/image/upload/v1658892092/img4_pjm6um.webp')";
		}

		const accentColors = ["#A770EF", "#4ecdc4", "#2980b9",
			"#f8b500", "#f46b45", "#ba8b02", "#00bf8f", "#b993d6",
			"#3a7bd5", "#50c9c3", "#007991", "#f8ffae", "#ec6ead",
			"#c0c0aa", "#4568DC", "#6190E8", "#F7971E", "#E44D26",
			"#E100FF", "#7303c0", "#6D6027", "#96c93d", "#a17fe0",
			"#FF416C", "#8360c3"
		]
		
		function changeColor(){
			setInterval(function(){
				let selectedColor = accentColors[Math.floor(Math.random() * accentColors.length)];
				document.documentElement.style.setProperty('--accent-color', selectedColor);
			}, 1000);
		}
		changeColor();
	}, [])

	return (
		<div className={lightMode!==null?"light App":"App"}>
			<Suspense fallback={<Loader loadingStyle="basic" failed={false} />}>
				<Navbar
					redirect={redirect}
					setRedirect={setRedirect}
					searchText={searchText}
					setSearchText={setSearchText}
					toggleDarkMode={toggleDarkMode}
				/>
				<Offline>
					<OfflineBar />
				</Offline>
				<div className="container-fluid">
					<Routes>
						<Route
							path="/"
							exact
							element={
								<LandingPage />
							}
						/>
						<Route
							path="/movies"
							exact
							element={
								<Movies />
							}
						/>
						<Route
							path="/movies/:movieID"
							exact
							element={
								<SingleMovie />
							}
						/>
						<Route
							path="/tv"
							exact
							element={
								<TvShow />
							}
						/>
						<Route
							path="/tv/:tvID"
							exact
							element={
								<SingleTv />
							}
						/>
						<Route
							path="/person/:personID"
							exact
							element={
								<SinglePerson />
							}
						/>
						<Route
							path="/discover"
							exact
							element={
								<Explore />
							}
						/>
						<Route
							path="/discover/:genre"
							exact
							element={
								<SingleGenre />
							}
						/>
						<Route
							path="/search"
							exact
							element={
								<Search
									redirect={redirect}
									setRedirect={setRedirect}
									searchText={searchText}
								/>
							}
						/>
						<Route
							path="*"
							element={
								<NotFound />
							}
						/>
					</Routes>
					<br />
				</div>
			</Suspense>
		</div>
	)
}

export default App;