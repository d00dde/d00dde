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
  const $delete = document.querySelector('.delete');
  const $articlesList = document.querySelector('.articles-list');

  const $category = document.querySelector('.category');
  const $subcategory = document.querySelector('.subcategory');
  const $title = document.querySelector('.title');
  const $content = document.querySelector('.content');

  getArticles();

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
  
  $publish.onclick = async () => {
    const path = `${$category.value}_${$subcategory.value}_${$title.value}`;
    try {
      await firestore.doc('source/map').set({
        [$category.value]:{
          [$subcategory.value]:{
            [$title.value]: {
              path,
              timestamp: new Date()
            }
          } 
        }
      },{merge: true});
      const exist = await firestore.collection('articles').where('path', '==' , path).get();
      if(exist.empty){
        await firestore.collection('articles').add({
        path,
        title: $title.value,
        content: $content.value.split('\n'),
        timestamp: new Date()
      });
      } else {
        await exist.docs[0].ref.update({
        content: $content.value.split('\n'),
        timestamp: new Date()
      });
      }
      showTooltip('Content is set');
      $category.value = '';
      $subcategory.value = '';
      $title.value = '';
      $content.value = '';
      getArticles ();
    } catch (error) {
      showTooltip('Content set is failure');
      console.log(error.message);
    }
  }

  $delete.onclick = async () => {
    const path = `${$category.value}_${$subcategory.value}_${$title.value}`;
    try {
      const responce = await firestore.collection('articles').where('path', '==' , path).get();
      if(responce.empty){
        throw new Error('Article not exist');
      }
      await responce.docs[0].ref.delete();
      const map = (await firestore.doc('source/map').get()).data();
      delete map[$category.value][$subcategory.value][$title.value];
      await firestore.doc('source/map').set(map);
      showTooltip('Article deleted');
      getArticles ();

    } catch (error) {
      showTooltip('Failed to delete article');
      console.log(error.message);
    }

  }

  $articlesList.onclick = async (e) => {
    if(e.target.tagName !== 'A'){
      return;
    }
    e.preventDefault();
    try {
      const responce = await firebase.firestore().collection('articles').where('path', '==', e.target.getAttribute('path')).get();
      const article = responce.docs[0].data();
      const parsePath = article.path.split('_');
      $category.value = parsePath[0];
      $subcategory.value = parsePath[1];
      $title.value = parsePath[2];
      $content.value = '';
      article.content.forEach((paragraph) => {
          $content.value += paragraph + '\n';
      });
      showTooltip('Article uploaded successfully');
    } catch (error) {
      showTooltip('Article loading failed');
      console.log(error.message);
    }
  }
 
  async function getArticles () {
    try {
    const request = await firebase.firestore().doc('source/map').get();
    const articlesMap = request.data();
    let list = '<ul>';
    for (const category in articlesMap) {
      list += '<li class="category">' + category ;
      list += '<ul>';
        for(subcategory in articlesMap[category]) {
          list += '<li>' + subcategory;
          list += '<ul>';
            for (article in articlesMap[category][subcategory]) {
              list += `<li><a href ="#" path="${category}_${subcategory}_${article}">${article}</a>`;
              list += '</li>';
            }
          list += '</ul>';
          list += '</li>';
        }
      list += '</ul>';
      list += '</li>';
    }
    list += '</ul>';
    $articlesList.innerHTML = list;
    } catch (error) {
      showTooltip('Loading article list failed');
      console.log(error.message);
    }
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