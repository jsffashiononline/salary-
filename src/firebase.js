import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyB8rsQe3KMz6VS6cp1BeSwuXOD2QWOSTgY",
  authDomain: "my-salary-6e828.firebaseapp.com",
  projectId: "my-salary-6e828",
  storageBucket: "my-salary-6e828.firebasestorage.app",
  messagingSenderId: "149270294923",
  appId: "1:149270294923:web:ae6420f2e44e071ba37f8e",
  measurementId: "G-08H8DYWZ5R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const functions = getFunctions(app, 'us-central1');
