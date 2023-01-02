// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO6P6zdvodAFXzwxU0nHBtSTafEslY4fw",
  authDomain: "bitzquad-signature-generator.firebaseapp.com",
  projectId: "bitzquad-signature-generator",
  storageBucket: "bitzquad-signature-generator.appspot.com",
  messagingSenderId: "601911631737",
  appId: "1:601911631737:web:52376f959bee54f15619a8",
  measurementId: "G-G5SKBB9TXD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// if(analytics.isSupported()){
//     export const analytics = getAnalytics(app);
// }