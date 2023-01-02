const Time = () => {
	const date = new Date();
	const currentDay = date.toLocaleDateString('pl-PL', { weekday: 'long' });
	const currentDate = date.getDate();
	const currentMonth = date.getMonth();
	const currentHour = date.getHours();
	let currentMinutes = date.getMinutes();

	const monthsName = [
		'styczeń',
		'luty',
		'marzec',
		'kwiecień',
		'maj',
		'czerwiec',
		'lipiec',
		'sierpień',
		'wrzesień',
		'październik',
		'listopad',
		'grudzień',
	];

	if (currentMinutes < 10) {
		currentMinutes = '0' + currentMinutes;
	}

	const currentTime = `${currentDay} ${currentDate} ${monthsName[currentMonth]} ${currentHour}:${currentMinutes}`;

	return (
		<div>
			<p className='time'>{currentTime}</p>
		</div>
	);
};

export default Time;
