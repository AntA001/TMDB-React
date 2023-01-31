import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, moviesPerPage, totalMovies, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li
						key={number}
						className={`page-item ${currentPage === number && "active"}`}>
						<a onClick={() => paginate(number)} className='page-link'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
