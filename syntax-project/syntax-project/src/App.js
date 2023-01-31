import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";

const App = () => {
	const [selectedMovie, setSelectedMovie] = useState(null);

	return (
		<div>
			{selectedMovie ? (
				<MovieDetails
					movie={selectedMovie}
					onClose={() => setSelectedMovie(null)}
				/>
			) : (
				<MovieList setSelectedMovie={setSelectedMovie} />
			)}
		</div>
	);
};

export default App;
