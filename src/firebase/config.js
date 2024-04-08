import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHwq9HMLE3Jk2D0xx5gxPCI9qkY3QcKRI",
  authDomain: "olx-4ccc5.firebaseapp.com",
  projectId: "olx-4ccc5",
  storageBucket: "olx-4ccc5.appspot.com",
  messagingSenderId: "244462190982",
  appId: "1:244462190982:web:4b2149123f6a987800ec07",
  measurementId: "G-VFH3ZHZDEX",
};

export default firebase.initializeApp(firebaseConfig);
