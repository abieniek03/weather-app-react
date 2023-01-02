import mapPin from '../../icons/map-pin.svg';
import Time from './Time/Time';

const Header = props => {
	return (
		<header className='header'>
			<div className='header__top'>
				<img src={mapPin} alt='City: ' className='header__icon' />
				<h1 className='header__city'>{props.city}</h1>
			</div>
			<Time />
		</header>
	);
};

export default Header;
