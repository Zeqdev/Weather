import React, { useState } from 'react';
import './App.css';

interface Api {
	base: string;
	key: string;
}

export function App() {
	const [query, setQuery] = useState<string>('');
	const [weather, setWeather] = useState<any>(null);

	const api: Api = {
		base: 'https://api.openweathermap.org/data/2.5/',
		key: '3265874a2c77ae4a04bb96236a642d2f',
	};

	const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
				.then(response => response.json())
				.then(result => {
					setWeather(result);
					setQuery('');
				});
		}
	};

	return (
		<>
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
		</>
	);
}
