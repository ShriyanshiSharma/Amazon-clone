// import firebase from "firebase";


import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ384xJEpNnIn4O9CohuG3mqxBWca90ho",
  authDomain: "clone-d822c.firebaseapp.com",
  projectId: "clone-d822c",
  storageBucket: "clone-d822c.appspot.com",
  messagingSenderId: "351270082241",
  appId: "1:351270082241:web:514dcf0edc333e4bb5a640",
  measurementId: "G-PGGD0DBEL7"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db  = firebaseApp.firestore();
// const auth = firebase.auth();


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db,auth};