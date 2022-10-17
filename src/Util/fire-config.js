// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCOge53uvHqtHwIUAyzngYiTA4U-N_8r4",
  authDomain: "empoworker475.firebaseapp.com",
  databaseURL: "https://empoworker475-default-rtdb.firebaseio.com",
  projectId: "empoworker475",
  storageBucket: "empoworker475.appspot.com",
  messagingSenderId: "523378999709",
  appId: "1:523378999709:web:316f55f3f89bd4b4fc2f74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
