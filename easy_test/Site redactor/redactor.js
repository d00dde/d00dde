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

  const $signInForm = document.querySelector('.sign-in');
  const $signOutBtn = document.querySelector('.sign-out');

  const $setMainData = document.querySelector('.set-main-data');
  const $publish = document.querySelector('.publish');

  $signInForm.onsubmit = function (event) {
    event.preventDefault();
    $signInForm.querySelector('.spinner').classList.add('play');
    document.querySelector('.message').innerText = '';
    const email = document.querySelector('.sign-in .email').value;
    const password = document.querySelector('.sign-in .password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      console.log('Sign in successful');
      $signInForm.querySelector('.spinner').classList.remove('play');
      document.querySelector('.message').innerText = '';
      this.parentNode.classList.add('hide-form');
    }).catch((error) => {
      $signInForm.querySelector('.spinner').classList.remove('play');
      console.log(error.code);
      document.querySelector('.message').innerText = error.message;
    });
  }

  $signOutBtn.onclick = () => {
    firebase.auth().signOut().then((responce) => {
      console.log('signed out successful');
      document.querySelector('.login-wrapper').classList.remove('hide-form');
    }).catch((error) => {
      showTooltip('Sign out is failure');
      console.log(error.message);
    });
  }

  $setMainData.onclick = () => {
    firestore.doc('source/mainData').set(data, true).then(() => {
      showTooltip('Main data is set');
    })
    .catch((error) => {
      showTooltip('Main data set is failure');
      console.log(error.message);
    });
  }
  
  $publish.onclick = () => {
    const $category = document.querySelector('.category');
    const $subcategory = document.querySelector('.subcategory');
    const $title = document.querySelector('.title');
    const $content = document.querySelector('.content');

    const path = 'articles/' + $category.value + '/' + $subcategory.value;
    
    firestore.collection(path).add({
      title: $title.value,
      content: $content.value.split('\n')
    }).then(() => {
      showTooltip('Content is set');
      $category.value = '';
      $subcategory.value = '';
      $title.value = '';
      $content.value = '';
    }).catch((error) => {
      showTooltip('Content set is failure');
      console.log(error.message);
    });
  }

  function showTooltip (message, delay = 2000) {
    const $tooltip = document.querySelector('.tooltip');
    $tooltip.innerText = message;
    $tooltip.classList.add('show');
    setTimeout(() => {
      const $tooltip = document.querySelector('.tooltip');
      $tooltip.innerText = '';
      $tooltip.classList.remove('show');
    }, delay);
  }
}