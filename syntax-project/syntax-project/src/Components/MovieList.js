import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Movie from "./Movie";
import "../App.css";

const MovieList = ({ setSelectedMovie }) => {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [moviesPerPage] = useState(18);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/trending/all/week?api_key=340fd39235c5a795b011b4e16a30857a`
		)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const handleSearch = (query) => {
		setSearch(query);
		if (!query) {
			return;
		}
		setLoading(true);
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=340fd39235c5a795b011b4e16a30857a&query=${query}`
		)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setLoading(false);
			});
	};

	const filteredMovies = search
		? movies.filter(
				(movie) =>
					movie.title &&
					movie.title.toLowerCase().includes(search.toLowerCase())
		  )
		: movies;

	// Get current movies
	const indexOfLastMovie = currentPage * moviesPerPage;
	const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
	const currentMovies = filteredMovies.slice(
		indexOfFirstMovie,
		indexOfLastMovie
	);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className='App'>
			<SearchBar onSearch={handleSearch} />
			{loading && <p>Loading...</p>}
			<div className='grid'>
				{currentMovies.map((movie) => (
					<Movie
						key={movie.id}
						movie={movie}
						setSelectedMovie={setSelectedMovie}
					/>
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				moviesPerPage={moviesPerPage}
				totalMovies={filteredMovies.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default MovieList;
