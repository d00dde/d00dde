	window.onload = () => {
		const firebaseConfig = {
	    apiKey: "AIzaSyBzdp5S3En4MgPS6HQvrmUvMpQeS2LgWso",
	    authDomain: "mario-plan-1d9ea.firebaseapp.com",
	    databaseURL: "https://mario-plan-1d9ea.firebaseio.com",
	    projectId: "mario-plan-1d9ea",
	    storageBucket: "mario-plan-1d9ea.appspot.com",
	    messagingSenderId: "976237185537",
	    appId: "1:976237185537:web:4562380cb51e1be194ce00"
  };
  
  firebase.initializeApp(firebaseConfig);

  const $signIn = document.querySelector('.sign-in');
  const $signOut = document.querySelector('.sign-out');
  const $register = document.querySelector('.register');

  const email = 'd48564@gmail.com';
  const password = '123456';
  

  
  $signIn.onclick = () => {
    signInWithWithEmailAndPassword (email, password);
  };
  $signOut.onclick = () => {
    signInOut();
  };
  $register.onclick = () => {
    createUserWithEmailAndPassword(email, password);
  };



  function signInWithWithEmailAndPassword (email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((responce) => {
      console.log('Sign in successful');
      console.log( 'responce: ', responce);
      console.log( firebase.currentUser);
    }).catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }
  
  function signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then((result) => {
      console.log('token: ', result.credential.accessToken); //Googles API token
      console.log('user: ', result.user);
    }).catch(function(error) {
      console.log('errorCode', error.code);
      console.log('errorMessage', error.message);
    });
  }

  function signInOut () {
    firebase.auth().signOut().then((responce) => {
      console.log('signed out successful'); //Googles API token
      console.log('responce: ', responce);
    }).catch((error) => {
      console.log('errorCode', error.code);
      console.log('errorMessage', error.message);
    });
  }
  
  function createUserWithEmailAndPassword (email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
      return response.user.sendEmailVerification();
    }).then (() => {
      console.log('Verification mail sended');
    }).catch((error) => {
      console.log('errorCode', error.code);
      console.log('errorMessage', error.message);
    });
  }


}