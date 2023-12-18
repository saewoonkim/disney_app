// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';//로그인
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-TNDmnKxOp5TDWVG-17Jix7Mf5R7KohM",
  authDomain: "disney-app-209d7.firebaseapp.com",
  projectId: "disney-app-209d7",
  storageBucket: "disney-app-209d7.appspot.com",
  messagingSenderId: "473239307036",
  appId: "1:473239307036:web:242dd431db0e43460530d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;