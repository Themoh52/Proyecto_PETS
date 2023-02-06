// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzXoFwjGS2PxYpDhVisxVYIKzBMs99onE",
  authDomain: "proyectopets-e462d.firebaseapp.com",
  projectId: "proyectopets-e462d",
  storageBucket: "proyectopets-e462d.appspot.com",
  messagingSenderId: "338083176189",
  appId: "1:338083176189:web:378623cb706c1f3adee894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () =>{
    return{
        app
    }
}