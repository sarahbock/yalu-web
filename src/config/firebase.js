import { initializeApp } from 'firebase/app';
import firebase from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';




// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCZCf_NkuYjIkp7tqye8iQ8nBXGCZxXXtk",
  authDomain: "understanding-pathways.firebaseapp.com",
  projectId: "understanding-pathways",
  storageBucket: "understanding-pathways.appspot.com",
  messagingSenderId: "197618595752",
  appId: "1:197618595752:web:f06f27c38f4255db328f9d",
  measurementId: "G-TSHE243VXF"
};

// initialize firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth();
export const db = getFirestore(app);
