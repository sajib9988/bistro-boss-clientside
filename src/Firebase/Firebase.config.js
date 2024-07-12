// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBr4BINWaX5Euh8SYlGE_Q1K4PAiBRYFBw",
    authDomain: "bistro-boss-2-b9aee.firebaseapp.com",
    projectId: "bistro-boss-2-b9aee",
    storageBucket: "bistro-boss-2-b9aee.appspot.com",
    messagingSenderId: "855672773883",
    appId: "1:855672773883:web:ffb562d319fb8cd26ee45e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;