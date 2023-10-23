// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVr_ejraNOKmLXQPTCB--3Q7MbdAE9FaM",
  authDomain: "proyecto-final-gorlero.firebaseapp.com",
  projectId: "proyecto-final-gorlero",
  storageBucket: "proyecto-final-gorlero.appspot.com",
  messagingSenderId: "1038380964706",
  appId: "1:1038380964706:web:1023039758ea5d50972a3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);