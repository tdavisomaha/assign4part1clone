import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAshNNsrHz6304F_pAAo7txlB1D6kqlKTw",
  authDomain: "quasartodolist-4e3ac.firebaseapp.com",
  projectId: "quasartodolist-4e3ac",
  storageBucket: "quasartodolist-4e3ac.firebasestorage.app",
  messagingSenderId: "629918064473",
  appId: "1:629918064473:web:a4930f25ec113cd877f648"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
