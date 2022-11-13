// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC97_5nlekB1Ge7zrkJ1HoAia_Nj02GlCI",
  authDomain: "empoworkerbase.firebaseapp.com",
  databaseURL: "https://empoworkerbase-default-rtdb.firebaseio.com",
  projectId: "empoworkerbase",
  storageBucket: "empoworkerbase.appspot.com",
  messagingSenderId: "430092950273",
  appId: "1:430092950273:web:f566c5bb3c18e0e3205900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
