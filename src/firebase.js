import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBWML45zZZQYPwuSZ5S0DWbPmPNr8kNM_A",
  authDomain: "demo1-56fb4.firebaseapp.com",
  projectId: "demo1-56fb4",
  storageBucket: "demo1-56fb4.appspot.com",
  messagingSenderId: "897023225465",
  appId: "1:897023225465:web:7e5aa204092a5e2c352ea8",
  measurementId: "G-KCJYFY47L5",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;
