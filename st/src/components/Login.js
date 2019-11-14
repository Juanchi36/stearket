import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';
import '../styles/Login.css';
import axios from 'axios';

const firebaseApp = firebase. initializeApp(firebaseConfig);
class Login extends Component {

    render () {
        
        const { user, signOut, signInWithGoogle, game } = this.props;
        if(game){
            let urls = 'http://localhost:8081/search?userEmail=' + user.email + '&gameName=' + game;console.log(urls)
            
            axios({
                method: 'post', 
                url: urls,
                
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
