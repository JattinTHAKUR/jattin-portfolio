import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4C9N4NcWHZoyD8qlkFYTnn4AcaTTk85g",
  authDomain: "jattin-portfolio.firebaseapp.com",
  projectId: "jattin-portfolio",
  storageBucket: "jattin-portfolio.appspot.com",
  messagingSenderId: "727761663244",
  appId: "1:727761663244:web:7120b5119191c377e44529",
  measurementId: "G-QSW903Z5KM"
};
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
