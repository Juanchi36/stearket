import firebase from 'firebase';

export function handleAuth () {
	const provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/plus.login');

	firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => console.log(`${result.user.email} ha iniciado sesión`))
		.catch((error) => console.log(`Error ${error.code}: ${error.message}`));
}

export function handleLogout () {
	firebase
		.auth()
		.signOut()
		.then((result) => console.log('Te has desconectado correctamente'))
		.catch((error) => console.log(`Error ${error.code}: ${error.message}`));
}
