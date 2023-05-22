// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLeaia4u226HoqN3V6L06BOMPY1w4hRBI",
  authDomain: "education-d5668.firebaseapp.com",
  projectId: "education-d5668",
  storageBucket: "education-d5668.appspot.com",
  messagingSenderId: "286438168338",
  appId: "1:286438168338:web:a8ef80da2dc2f67be105cb",
  measurementId: "G-94SCY6Y1KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;