import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';
const firebaseConfig = {
 apiKey: "AIzaSyCBqKIbbfPzT6YLDRsmJp-k66FCmMoR62",
 authDomain: "salary-and-production.firebaseapp.com",
 projectId: "salary-and-production",
 storageBucket: "salary-and-production.firebasestorage.app",
 messagingSenderId: "237716390645",
 appId: "1:237716390645:web:9d2f9ccc251f29db643bbc",
 measurementId: "G-RWLVC0KH63"
};
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const functions=getFunctions(app,'us-central1');
