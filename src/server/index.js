import * as firebase from 'firebase/app';
import "firebase/firestore";

export default class {
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
    firebase.initializeApp(this.config);
  }

  getMainData = async () => {
    return await firebase.firestore().doc('source/mainData').get();
  }


}