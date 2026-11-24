import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCBqKIbbfPzT6YLDRsmJp-k66FCmMoR62o",
  authDomain: "salary-and-production.firebaseapp.com",
  projectId: "salary-and-production",
  storageBucket: "salary-and-production.firebasestorage.app",
  messagingSenderId: "237716390645",
  appId: "1:237716390645:web:3d556f2956018d86643bbc",
  measurementId: "G-E8H2V0RWWY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const functions = getFunctions(app, 'us-central1');
