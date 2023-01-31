import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => (
	<div className='search-container'>
		<input
			type='text'
			placeholder='Search'
			onChange={(e) => onSearch(e.target.value)}
			className='search-input'
		/>
	</div>
);

export default SearchBar;
