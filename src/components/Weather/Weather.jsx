import iconHumidity from '../../icons/humidity.svg';
import iconPressure from '../../icons/pressure.svg';

const Weather = ({ data }) => {
	return (
		<div className='weather'>
			<div className='weather__temperature'>
				<p>
					{Math.round(data.main.temp)}
					<sup>°C</sup>
				</p>
			</div>
			<div className='weather__description'>
				<img src={`icons/${data.weather[0].icon}.png`} alt='icon' className='weather__icon icon' />
				<p>{data.weather[0].description}</p>
			</div>

			<div className='weather__info-container'>
				<div className='weather__info-element'>
					<img src={iconHumidity} alt='icon' className='weather__info-icon icon' />
					<div className='weather__info-properties'>
						<p className='weather__info-title'>Wilgotność</p>
						<p className='weather__info-value'>{data.main.humidity}%</p>
					</div>
				</div>
				<div className='weather__info-element'>
					<img src={iconPressure} alt='icon' className='weather__info-icon weather__info-icon--pressure  icon' />
					<div className='weather__info-properties'>
						<p className='weather__info-title'>Ciśnienie</p>
						<p className='weather__info-value'>{data.main.pressure}hPa</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
