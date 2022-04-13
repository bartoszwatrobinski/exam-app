import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk3O8hTNHIsNm2P-trwzqR2HODrW9EuFA",
  authDomain: "examlogindev.firebaseapp.com",
  projectId: "examlogindev",
  storageBucket: "examlogindev.appspot.com",
  messagingSenderId: "463017241228",
  appId: "1:463017241228:web:48eedddafb019f825de9a9"
};

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { firebase, db }
export const auth = firebaseConfig.auth()