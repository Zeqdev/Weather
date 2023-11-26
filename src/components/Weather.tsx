import styles from '../styles/Weather.module.css'

interface Weather {
	current: {
		temp_c: number
		humidity: number
		wind_dir: string
		wind_kph: number

		condition: {
			icon: string
			text: string
		}
	}
}

export function Weather({ weather }: { weather: Weather }) {
	return (
		<div className={styles.weather_box}>
			<div className={styles.temp}>
				<img src={weather.current.condition.icon} alt='Weather icon' loading='lazy' />
				{Math.round(weather.current.temp_c)}°c
			</div>
			<div className={styles.weather}>{weather.current.condition.text}</div>
			<div className={styles.humidity}>Humidity {weather.current.humidity}%</div>
			<div className={styles.wind}>
				Wind direction {weather.current.wind_dir} at {weather.current.wind_kph} km/h
			</div>
		</div>
	)
}
