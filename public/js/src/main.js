import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase';

import GameApp from './components/GameApp';
var firebaseConfig = {
	apiKey: 'AIzaSyAMQe_3mK2VF1zWViGNtDqy6TBUomXyya4',
	authDomain: 'steartek.firebaseapp.com',
	databaseURL: 'https://steartek.firebaseio.com',
	projectId: 'steartek',
	storageBucket: '',
	messagingSenderId: '400567288077',
	appId: '1:400567288077:web:51ec6910a363ea30'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
render(<GameApp />, document.getElementById('app'));
