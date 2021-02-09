import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

interface Props {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
  measurementId: string | undefined;
}

const firebaseConfig: Props = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ?? "",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN ?? "",
  projectId: process.env.REACT_APP_PROJECT_ID ?? "",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID ?? "",
  appId: process.env.REACT_APP_FIREBASE_APP_ID ?? "",
  measurementId: process.env.REACT_APP_MEASUREMENT_ID ?? "",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const db = myFirebase.firestore();
export const auth = myFirebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
