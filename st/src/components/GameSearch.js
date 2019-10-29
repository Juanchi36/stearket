import React, { useState } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { func } from 'prop-types';

export default function GameSearch () {
	const [ gameName, setGameName ] = useState('');
	const [ data, setData ] = useState([]);
	const [ price, setPrice ] = useState('');

	const handleClick = () => {
		let replacedName = gameName.replace(/ /g, '+');
		callToG2a(replacedName);
	};

	const handleChange = (e) => {
		setGameName(e.target.value);
		let replacedName = e.target.value.replace(/ /g, '+');
		callToG2a(replacedName);
	}

	const getPrice = (e) => {
		setPrice('https://www.g2a.com/marketplace/product/auctions/?id=' + e.target.id);
		console.log(price);
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');

		headers.append('Origin', 'http://localhost:3000');
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://www.g2a.com/marketplace/product/auctions/?id=' + e.target.id,
				{
					mode: 'cors',
					credentials: 'include',
					method: 'GET',
					headers: headers
				}
			)
			.then((res) => {
				let prices = res.data.lowest_price
				setPrice(prices);
				console.log(price);
			});
	}

	const List = () => {
		return (
			<div>
				{
					data.map(item => (
					item.name.indexOf('Key') === -1 ? <p><a href='#' id ={item.id} key={item.id} onClick={getPrice}>{item.name}</a></p> : null
					))
				}
			</div>
		)
	}

	const callToG2a = (name) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');

		headers.append('Origin', 'http://localhost:3000');
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://www.g2a.com/lucene/search/filter?&search='+ name,
				{
					mode: 'cors',
					credentials: 'include',
					method: 'GET',
					headers: headers
				}
			)
			.then((res) => {
				let games = res.data.docs
				setData(games);
			});
	};

	return (
		<div>
			<InputGroup className='mb-3'>
				<FormControl
					placeholder='Nombre del juego'
					aria-label='Recipient&#39;s username'
					aria-describedby='basic-addon2'
					onChange={(e) => handleChange(e)}
				/>
				<InputGroup.Append>
					<Button variant='outline-secondary' onClick={handleClick}>
						Buscar
					</Button>
				</InputGroup.Append>
			</InputGroup>
			<List/>
		</div>
	);
}
