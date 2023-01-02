import Search from './components/Search/Search';
import Info from './components/Header/Header';
import Weather from './components/Weather/Weather';
import Forecast from './components/Forecast/Forecast';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL, API_KEY } from './api';

const App = props => {
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');
	const [currentWeather, setCurrentWeather] = useState('');
	const [forecast, setForecast] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(position => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		});

		axios
			.get(`${API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pl`)
			.then(response => {
				setCurrentWeather(response.data);
				selectBg(response);
			})
			.catch(error => console.log('error ' + error));

		axios
			.get(`${API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pl`)
			.then(response => {
				setForecast(response.data);
			})
			.catch(error => console.log('error ' + error));
	}, [latitude, longitude]);

	const selectBg = response => {
		console.log(response.data.weather[0].icon);
		if (response.data.weather[0].icon === '04n') {
			console.log('git');
			document.body.classList.remove('cloudy', 'sunny', 'night');
			document.body.classList.add('clear');
		} else if (
			response.data.weather[0].icon === '01n' ||
			response.data.weather[0].icon === '02n' ||
			response.data.weather[0].icon === '03n'
		) {
			document.body.classList.remove('cloudy', 'clear', 'sunny');
			document.body.classList.add('night');
		} else if (
			response.data.weather[0].icon === '01d' ||
			response.data.weather[0].icon === '02d' ||
			response.data.weather[0].icon === '03d'
		) {
			document.body.classList.remove('cloudy', 'clear', 'night');
			document.body.classList.add('sunny');
		} else {
			document.body.classList.remove('clear', 'sunny', 'night');
			document.body.classList.add('cloudy');
			// console.log('nie działa');
		}
	};

	const searchLocation = enteredCity => {
		console.log(enteredCity);
		axios.get(`${API_URL}/weather?q=${enteredCity}&appid=${API_KEY}&units=metric&lang=pl`).then(response => {
			// const status = Object.assign({}, ...response.data.weather);
			setCurrentWeather(response.data);
			console.log(response);
			selectBg(response);
		});
		axios
			.get(`${API_URL}/forecast?q=${enteredCity}&appid=${API_KEY}&units=metric&lang=pl`)
			.then(response => {
				setForecast(response.data);
			})
			.catch(error => console.log('error ' + error));
	};

	return (
		<div className='App'>
			<Search onSearch={enteredCity => searchLocation(enteredCity)} />
			<Info city={currentWeather.name} />
			{currentWeather && <Weather data={currentWeather} />}
			{forecast && <Forecast data={forecast} />}
		</div>
	);
};

export default App;
