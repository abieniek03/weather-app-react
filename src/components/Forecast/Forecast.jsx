const Forecast = ({ data }) => {
	const days = ['jutro', 'pojutrze'];

	return (
		<div className='forecast'>
			{data.list.splice(0, 2).map((item, index) => (
				<div className='forecast__item' key={index}>
					<div className='forecast__item-title'>
						<img src={`icons/${item.weather[0].icon}.png`} alt='icon' className='forecast__item-icon' />
						<div className='forecast__item-info'>
							<p className='forecast__item-info--day'>{days[index].toLocaleUpperCase()}</p>
							<p>{item.weather[0].description}</p>
						</div>
					</div>
					<div className='forecast__item-temperature'>
						<span>{Math.round(item.main.temp)}</span>
						<sup>°C</sup>
					</div>
				</div>
			))}
		</div>
	);
};

export default Forecast;
