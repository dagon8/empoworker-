// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd8_hhARNusjGLZKdMrsc3jE0rG3r-yWw",
  authDomain: "empoworkerdemo.firebaseapp.com",
  databaseURL: "https://empoworkerdemo-default-rtdb.firebaseio.com",
  projectId: "empoworkerdemo",
  storageBucket: "empoworkerdemo.appspot.com",
  messagingSenderId: "732774087936",
  appId: "1:732774087936:web:52b0e6242c758cafe3c7e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
