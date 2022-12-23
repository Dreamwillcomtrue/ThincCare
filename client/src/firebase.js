import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//STORED THE FIREBASE DETAILS IN .env.local FILE

const firebaseConfig = {
  apiKey: "AIzaSyA4pJyVt9CTPpFLGWYD72UllyJB6pMAL6s",
  authDomain: "testlevel2-f2f79.firebaseapp.com",
  projectId: "testlevel2-f2f79",
  storageBucket: "testlevel2-f2f79.appspot.com",
  messagingSenderId: "265902883073",
  appId: "1:265902883073:web:a53d0bebe514c785eb1b00",
  measurementId: "G-6TK0Q6XSNN"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
