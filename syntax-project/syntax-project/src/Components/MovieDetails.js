import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./MovieDetails.css";

const MovieDetails = ({ movie, onClose }) => {
	const [videoId, setVideoId] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (movie) {
			setLoading(true);
			fetch(
				`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=340fd39235c5a795b011b4e16a30857a`
			)
				.then((response) => response.json())
				.then((data) => {
					const trailer = data.results.find(
						(video) => video.type === "Trailer"
					);
					if (trailer) {
						setVideoId(trailer.key);
					}
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [movie]);

	const opts = {
		height: "390",
		width: "640",
	};

	if (!movie) {
		return null;
	}

	return (
		<div className='movie-details-container'>
			<div className='movie-details-header'>
				<img
					className='movie-details-poster'
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<div className='movie-details-info'>
					<h2 className='movie-details-title'>{movie.title}</h2>
					<p className='movie-details-overview'>{movie.overview}</p>
				</div>
			</div>
			<YouTube
				className='movie-details-trailer'
				videoId={videoId}
				opts={opts}
			/>
			<div className='fab-container' onClick={() => onClose()}>
				<img
					className='fab'
					src='https://cdn-icons-png.flaticon.com/512/0/340.png'
				/>
			</div>
		</div>
	);
};

export default MovieDetails;
