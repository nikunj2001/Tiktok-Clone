// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyAj9T1OO9xp3CUI_twd7RxDwYHaff4ti2k",
  authDomain: "tiktokcline.firebaseapp.com",
  projectId: "tiktokcline",
  storageBucket: "tiktokcline.appspot.com",
  messagingSenderId: "13753724527",
  appId: "1:13753724527:web:9df030fc9f858bc789a79a",
  measurementId: "G-PRCLFHNNVZ"
};

const firebaseApp = initializeApp(firebaseConfig);   
const db = firebaseApp.firestore();

export default db;