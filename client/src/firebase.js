// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-b6441.firebaseapp.com',
  projectId: 'mern-estate-b6441',
  storageBucket: 'mern-estate-b6441.appspot.com',
  messagingSenderId: '628859583612',
  appId: '1:628859583612:web:9b87af9d0509f5d45d1df9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
