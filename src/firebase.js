import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

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
const db = getDatabase(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {})
  .catch((error) => {
    console.error("Error setting Firebase Auth persistence:", error);
  });

export { auth, db };
