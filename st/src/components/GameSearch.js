import React, { useEffect, useState } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { func } from 'prop-types';

export default function GameSearch () {
	const [ gameName, setGameName ] = useState('');
	const [ data, setData ] = useState([]);
	const [ price, setPrice ] = useState('');
	const [ gameIdG2a, setGameIdG2a ] = useState('');
	const [ queryName, setQueryName ] = useState('');
	const [ queryResult, setQueryResult] = useState([]);
	

	const handleClick = () => {
		let replacedName = gameName.replace(/ /g, '+');
		callToG2a(replacedName);
	};

	const handleChange = (e) => {
		e.preventDefault();
		setGameName(e.target.value);
		let replacedName = e.target.value.replace(/ /g, '+');
		callToG2a(replacedName);
	}

	const SearchSql = () => {
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('origin', 'x-requested-with');
		headers.append("Access-Control-Allow-Origin", "*");
    	headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		headers.append('Origin', 'http://localhost:3000');
		
		axios
			.get(
				'http://localhost:9001/searchGame?name=' + queryName,
				{
					mode: 'cors',
					credentials: 'include',
					method: 'GET',
					headers: headers
				}
			)
			.then((res) => {
				// let prices = res.data.lowest_price
				// setPrice(prices);
				// searchSql();
				//console.log(res.data);
				setQueryResult(res.data);
			});
			
		
		console.log (queryResult);
	}

	const getPrice = (e) => {
		e.preventDefault();
		//setPrice('https://www.g2a.com/marketplace/product/auctions/?id=' + e.target.id);
		let nameArr = e.target.name.split(' ');
		setQueryName(nameArr.slice(0, 2).join(' '));
		setGameIdG2a(e.target.id);
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
				
				//console.log(res.data);
			});
			SearchSql();
	}

	const List = () => {
		return (
			<div>
				{
					data.map(item => (
					item.name.indexOf('Key') === -1 ? <p><a href='#' id ={item.id} key={item.id} name={item.name} onClick={getPrice}>{item.name}</a></p> : null
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
			<h3>{queryResult.name}</h3>
		</div>
	);
}

// Formato url del juego de steam : https://store.steampowered.com/app/878570/
// Formato url del juego de g2a : https://www.g2a.com/stick-fight-the-game-steam-key-pc-global-i10000081854001 (es https://www.g2a.com + slug)