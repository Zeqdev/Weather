import './Location.css';

export function Location({ weather }: any) {
	const dateBuilder = (newDate: Date) => {
		const months: Array<string> = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const days: Array<string> = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];

		let day = days[newDate.getDay()];
		let date = newDate.getDate();
		let month = months[newDate.getMonth()];
		let year = newDate.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};

	return (
		<div className='location-box'>
			<div className='location'>
				{weather.name}, {weather.sys.country}
			</div>
			<div className='date'>{dateBuilder(new Date())}</div>
		</div>
	);
}
