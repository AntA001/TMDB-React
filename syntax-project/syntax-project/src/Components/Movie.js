import React from "react";
import "./Movie.css";

const Movie = ({ movie, setSelectedMovie }) => {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
	const DEFAULT_IMAGE =
		"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg";

	return (
		<div className='movie' onClick={() => setSelectedMovie(movie)}>
			<img
				src={
					movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : DEFAULT_IMAGE
				}
				alt={movie.title}
			/>
		</div>
	);
};

export default Movie;
