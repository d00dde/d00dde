	window.onload = () => {
		const firebaseConfig = {
	    apiKey: "AIzaSyCHgKcFxJOk_zSh4phlDVuyitKean87kOo",
      authDomain: "personal-site-41d91.firebaseapp.com",
      databaseURL: "https://personal-site-41d91.firebaseio.com",
      projectId: "personal-site-41d91",
      storageBucket: "personal-site-41d91.appspot.com",
      messagingSenderId: "438414038806",
      appId: "1:438414038806:web:884c1d47a5db1dfbb4e237"

  };
  
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const docRef = firestore.doc('source/mainData');

  const $signIn = document.querySelector('.sign-in');
  const $signOut = document.querySelector('.sign-out');
  const $register = document.querySelector('.register');
  const $input = document.querySelector('.msg-input');
  const $send = document.querySelector('.send');
  const $read = document.querySelector('.read');

  const email = 'test@gmail.com';
  const password = 'testtest';

  $send.onclick = (e) => {
    docRef.set(data, true).then(() => {
      console.log("set: ", $input.value);
    })
    .catch((error) => {
      console.log('errorCode', error.code);
      console.log('errorMessage', error.message);
    });
  };
  $read.onclick = (e) => {
    docRef.get().then((responce) => {
      console.log("get: ", responce.data());
    }).catch((error) => {
      console.log('errorCode', error.code);
      console.log('errorMessage', error.message);
    });
  };

  
  $signIn.onclick = () => {
    signInWithWithEmailAndPassword (email, password);
  };
  $signOut.onclick = () => {
    signOut();
  };
  $register.onclick = () => {
    createUserWithEmailAndPassword(email, password);
    console.log(firebase.auth().currentUser);
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

  function signOut () {
    firebase.auth().signOut().then((responce) => {
      console.log('signed out successful');
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