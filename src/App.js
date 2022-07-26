import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Aos from "aos";
import Loader from "./components/loader/Loader";
import { Offline } from "react-detect-offline";
import OfflineBar from "./components/card/OfflineBar";

const NotFound = lazy(() => import('./pages/NotFound'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const SingleMovie = lazy(() => import('./app/SingleMovie'));
const Movies = lazy(() => import('./app/Movies'));
const SinglePerson = lazy(() => import('./app/SinglePerson'));

const App = () => {

	useEffect(() => {
		Aos.init({
			duration: "2000"
		})

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
				document.documentElement.style.setProperty('--accent-transparent', `${selectedColor}33`);
				document.documentElement.style.setProperty('--accent-transparent-2', `${selectedColor}33`);
			}, 1000);
		}
		changeColor();
	}, [])

	return (
		<div className="App">
			<Suspense fallback={<Loader loadingStyle="basic" failed={false} />}>
				<Navbar />
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
							path="/movies/:id"
							exact
							element={
								<SingleMovie />
							}
						/>
						<Route
							path="/person/:id"
							exact
							element={
								<SinglePerson />
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