import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB34qmr6gqaYCRcjM0r9Km0KAfptw8e-8Q",
  authDomain: "coingecko-52f06.firebaseapp.com",
  projectId: "coingecko-52f06",
  storageBucket: "coingecko-52f06.appspot.com",
  messagingSenderId: "466102184567",
  appId: "1:466102184567:web:b93aee4557b2b850f1b472",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app;