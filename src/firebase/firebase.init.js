// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUqWV2BMbIoG-AymSrEVC-e3IfTyXHEOI",
    authDomain: "coffee-store-e0bb1.firebaseapp.com",
    projectId: "coffee-store-e0bb1",
    storageBucket: "coffee-store-e0bb1.appspot.com",
    messagingSenderId: "682170962358",
    appId: "1:682170962358:web:baedb36f8a21ef1e693117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;