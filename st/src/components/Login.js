import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';
import '../styles/Login.css';
import axios from 'axios';



const firebaseApp = firebase. initializeApp(firebaseConfig);

// function signOut(){}
// function signInWithGoogle(){}

class Login extends Component {

    render () {
        // const mongoose = require('mongoose');
        // const Search = require('../searchLogSchema');
        const { user, signOut, signInWithGoogle, game } = this.props;console.log(this.props);
        if(game){
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('origin', 'x-requested-with');
            headers.append("Access-Control-Allow-Origin", "*");
            headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

            headers.append('Origin', 'http://localhost:3000');
            //http://localhost:9001/search?userEmail=pepe@gmail.com&gameName=halo
            axios
                .post(
                    'http://localhost:9001/search?userEmail=' + user.email + '&gameName=' + game,
                    {
                        mode: 'cors',
                        credentials: 'include',
                        method: 'GET',
                        headers: headers
                    }
                )
                .then((res) => {
                    console.log(res.data)
                })
        }
        
        return (
            <nav className='blue darken-4'>
                <div className='nav-wrapper container'>
                <a href='#' className='long-title left brand-logo'>
						StearTek
					</a>
					<a href='#' className='short-title left brand-logo'>
						S T
					</a>
                    {
                        user ?
                        <ul className='navbar right' id='user-data'>
                            <li>
                            <img width='32'
                            className='avatar circle responsive-img'
                            src={user.photoURL}
                            alt='user img' />
                            </li>
                            <li className='user-name'>{user.displayName}</li>
                        </ul>
                        
                        : <span></span>

                    }
                    {
                        user ? 
                        <ul className='right'>
                            <li>
                                <button className='waves-effect waves-light btn blue darken-1' onClick={signOut}>Sign out</button>
                            </li>    
                        </ul>
                        :
                        <ul className='right'>
                            <li>    
                                 <button className='waves-effect waves-light btn blue darken-1' onClick={signInWithGoogle}>Sign in 
                                 </button>
                            </li>      
                        </ul>    
                    }
                </div>    
            </nav>
        )
    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
