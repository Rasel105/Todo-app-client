import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1NYO-ZH-O3X8-ajnZyLaGT0uqRTxUOr4",
    authDomain: "todo-app-66a24.firebaseapp.com",
    projectId: "todo-app-66a24",
    storageBucket: "todo-app-66a24.appspot.com",
    messagingSenderId: "613762461336",
    appId: "1:613762461336:web:094d250c2829bc5a6eaaed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;