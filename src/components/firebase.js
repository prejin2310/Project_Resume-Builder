import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAhBBnJJ9TGCh96TnHB-cXlyokwWCTgW-A",
    authDomain: "myresume-new.firebaseapp.com",
    projectId: "myresume-new",
    storageBucket: "myresume-new.appspot.com",
    messagingSenderId: "115842097876",
    appId: "1:115842097876:web:0cb9d05b7b43daacad5141",
    measurementId: "G-97E1DCJ6K2"
  }

  firebase.initializeApp(firebaseConfig);
  export const dataref= firebase.database();
  export default firebase;