import React from 'react';
import logo from './logo.svg';
import GameSearch from './components/GameSearch';
import Searcher from './components/Searcher';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
	return (
		<div className='App'>
			<Searcher />
		</div>
	);
}

export default App;
