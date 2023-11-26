import React, { useState } from 'react'
import { Location } from './components/Location.tsx'
import { Weather } from './components/Weather.tsx'
import './App.css'

function App() {
	const [query, setQuery] = useState<string>('')
	const [weather, setWeather] = useState(null)

	const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, {
				method: 'GET',
				headers: {
					'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
					'X-RapidAPI-Key': '71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5',
				},
			})
				.then(response => response.json())
				.then(result => {
					setWeather(result)
					setQuery('')
				})
		}
	}

	return (
		<section className='container'>
			<header className='header'>
				<input
					className='search-box'
					type='text'
					placeholder='Search by location'
					onChange={e => setQuery(e.target.value)}
					value={query}
					onKeyPress={search}
				/>
			</header>
			<main>
				{weather !== null ? (
					<article>
						<Location weather={weather} />
						<Weather weather={weather} />
					</article>
				) : (
					<h2 className='notFound'>No se encontraron resultados disponibles</h2>
				)}
			</main>
		</section>
	)
}

export default App
