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
  //console.log(document.getElementsByTagName('VIDEO')[0].src);
  
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  //console.log('firebase: ', firebase);
  console.log('firestore: ', firestore);

  const messages = firestore.collection('projects/chat/messages');

  const $input = document.querySelector('.msg-input');
  const $box = document.querySelector('.msg-box');
  const $sendBtn = document.querySelector('.msg-send');

  $sendBtn.onclick = () => {
    messages.add({
      date: new Date().getTime(),
      msg: $input.value
    })
    .then()
    .catch((err) => {console.log("Is error ", err)})
  }

/*  $input.onchange = function (e) {
  	docRef.set({
  		value: e.target.value
  	})
  	.then(() => {console.log("Is set ", e.target.value)})
  	.catch((err) => {console.log("Is error ", err)})
  };*/

	  messages.onSnapshot((doc) => {
      console.log(messages.limitToLast(3))
	  	messages.limitToLast(2).orderBy('date').get().then((e) => {
        e.docs.forEach((doc) => {
          console.log(doc.data());
        });
      });
      if (doc && doc.exists) {
	  		console.log(doc.data().value);
	  		$h2.innerText = doc.data().value;
	  	}
	  });



  };