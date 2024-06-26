// firebase.jsx

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKrnfAHtBczwnyzw1wmm_eAfHltRKzzSs",
  authDomain: "y-inventory.firebaseapp.com",
  projectId: "y-inventory",
  storageBucket: "y-inventory.appspot.com",
  messagingSenderId: "1045912593899",
  appId: "1:1045912593899:web:1bc67256284dba7d0a25ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
