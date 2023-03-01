import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyANfovU7d6QJFniluKEECeVBnxXChrHn54',
  authDomain: 'money-can-145ae.firebaseapp.com',
  projectId: 'money-can-145ae',
  storageBucket: 'money-can-145ae.appspot.com',
  messagingSenderId: '408225112663',
  appId: '1:408225112663:web:6571b8a432228cf899f912',
  measurementId: 'G-RZ2KH01K91',
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app) 