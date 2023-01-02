import { useState } from 'react';
import searchIcon from '../../icons/search.svg';

const Search = props => {
	const [isActive, setIsActive] = useState(false);
	const [enteredCity, setEnteredCity] = useState(null);

	const toggleClass = e => {
		setIsActive(isActive => !isActive);
	};

	const getCity = e => {
		if (e.key === 'Enter') {
			props.onSearch(enteredCity);
			e.target.value = '';
		}
	};

	return (
		<div className='search'>
			<input
				type='text'
				placeholder='Wyszukaj...'
				className={`search__input ${isActive ? 'search__input--active' : null}`}
				onChange={e => setEnteredCity(e.target.value)}
				onKeyDown={getCity}
			/>
			<button className='search__button' onClick={toggleClass}>
				<img src={searchIcon} alt='Search' className='search__icon icon' />
			</button>
		</div>
	);
};

export default Search;
