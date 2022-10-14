import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDxAVG3qv0YfWzJTk6Pl0UiuNSFoYM_ApM",
  authDomain: "twitter-4be3a.firebaseapp.com",
  projectId: "twitter-4be3a",
  storageBucket: "twitter-4be3a.appspot.com",
  messagingSenderId: "111359396493",
  appId: "1:111359396493:web:8f7b198c49c011eab2f0c4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app;