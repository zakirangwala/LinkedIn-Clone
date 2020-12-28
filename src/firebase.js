import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmQG__ZnQ_LbU849WIiuTwH4-DYwILuU0",
  authDomain: "linkedin-clone-f0380.firebaseapp.com",
  projectId: "linkedin-clone-f0380",
  storageBucket: "linkedin-clone-f0380.appspot.com",
  messagingSenderId: "309354533577",
  appId: "1:309354533577:web:496c1a9ec288e46e3cf318",
  measurementId: "G-5BM4X8V75Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
