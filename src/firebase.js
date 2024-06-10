import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqFVlxjo8YNgy6EIxlV9t3WOx44h42vNM",

  authDomain: "psychologists-6f575.firebaseapp.com",

  databaseURL:
    "https://psychologists-6f575-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "psychologists-6f575",

  storageBucket: "psychologists-6f575.appspot.com",

  messagingSenderId: "173303807170",

  appId: "1:173303807170:web:2bfe16d517007d1bb64f5b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
