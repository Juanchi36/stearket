import React, { useState } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import axios from 'axios';

export default function GameSearch () {
	const [ gameName, setGameName ] = useState('');

	const handleClick = () => {
		let replacedName = gameName.replace(/ /g, '+');
		// console.log(replacedName);
		callToG2a(replacedName);
	};

	const callToG2a = (name) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');

		headers.append('Origin', 'http://localhost:3000');
		//console.log(headers);
		axios
			.get(
				`https://store.steampowered.com/api/appdetails?appids=1164400&cc=ars`,
				{
					mode: 'cors',
					credentials: 'include',
					method: 'GET',
					headers: headers
				}
			)
			.then((res) => {
				// const persons = res.data;
				// this.setState({ persons });
				console.log(res);
			});
		// 	let url = 'https://www.g2a.com/lucene/search/filter?&search=street' + name;
		// 	fetch(
		// 		url,
		// 		{
		// 			// mode: 'no-cors'
		// 		}
		// 	)
		// 		.then((res) => res.text())
		// 		.catch((error) => console.error('Error:', error))
		// 		.then((response) => console.log('Success:', response));
	};

	return (
		<div>
			<InputGroup className='mb-3'>
				<FormControl
					placeholder='Nombre del juego'
					aria-label='Recipient&#39;s username'
					aria-describedby='basic-addon2'
					onChange={(e) => setGameName(e.target.value)}
				/>
				<InputGroup.Append>
					<Button variant='outline-secondary' onClick={handleClick}>
						Buscar
					</Button>
				</InputGroup.Append>
			</InputGroup>
			<h1>{gameName} </h1>
		</div>
	);
}
