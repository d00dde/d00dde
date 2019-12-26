import * as firebase from 'firebase/app';
import "firebase/firestore";

class FirebaseServer {
  config = {
    apiKey: "AIzaSyCHgKcFxJOk_zSh4phlDVuyitKean87kOo",
    authDomain: "personal-site-41d91.firebaseapp.com",
    databaseURL: "https://personal-site-41d91.firebaseio.com",
    projectId: "personal-site-41d91",
    storageBucket: "personal-site-41d91.appspot.com",
    messagingSenderId: "438414038806",
    appId: "1:438414038806:web:884c1d47a5db1dfbb4e237"
  };

  constructor () {
    if(!FirebaseServer.instance){
      firebase.initializeApp(this.config);
      console.log('initialize firebase');
      FirebaseServer.instance = this;
    }
    return FirebaseServer.instance;
  }

  getMainData = async () => {
    return await firebase.firestore().doc('source/mainData').get();
  }
  getArticles = async () => {
    return await firebase.firestore().doc('source/map').get();
  }
  getArticle = async (path) => {
    return (await firebase.firestore().collection('articles').where('path', '==', path).get()).docs[0];
  }
}
export default new FirebaseServer();