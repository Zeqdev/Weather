import { useEffect } from 'react'
import styles from '../styles/Location.module.css'

interface Weather {
	location: {
		name: string
		region: string
		country: string
		localtime: string
	}
}

export function Location({ weather }: { weather: Weather }) {
	useEffect(() => {
		if (
			new Date(weather.location.localtime).getHours() >= 20 ||
			new Date(weather.location.localtime).getHours() <= 6
		) {
			const container = document.querySelector('.container')
			if (container) {
				container.setAttribute(
					'style',
					'background: linear-gradient(90deg, #222F3D, #3D556E)'
				)
			}
		} else {
			const container = document.querySelector('.container')
			if (container) {
				container.setAttribute(
					'style',
					'background: linear-gradient(90deg, #ffa585, #ffeda0);'
				)
			}
		}
	}, [weather.location.localtime])

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
		]
		const days: Array<string> = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		]

		const day = days[newDate.getDay()]
		const date = newDate.getDate()
		const month = months[newDate.getMonth()]
		const year = newDate.getFullYear()

		return `${day} ${date} ${month} ${year}`
	}

	return (
		<div className={styles.location_box}>
			<div className={styles.location}>
				{weather.location.name}, {weather.location.region}, {weather.location.country}
			</div>
			<div className={styles.date}>{dateBuilder(new Date())}</div>
		</div>
	)
}
