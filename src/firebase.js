// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVG8jaiT_ChayoC9MU0hCyb3TAscMUXDM",
    authDomain: "todo-list-50b55.firebaseapp.com",
    databaseURL: "https://todo-list-50b55-default-rtdb.firebaseio.com",
    projectId: "todo-list-50b55",
    storageBucket: "todo-list-50b55.appspot.com",
    messagingSenderId: "513249985088",
    appId: "1:513249985088:web:735444d6d9e2e2b21915a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();