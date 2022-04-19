import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyDOPqwOHohE6l36lqRJpxd_4i-9fD251DU",
  authDomain: "yccimcs.firebaseapp.com",
  projectId: "yccimcs",
  storageBucket: "yccimcs.appspot.com",
  messagingSenderId: "116397141417",
  appId: "1:116397141417:web:f279d1d3525a58f74928b8",
});

export const db = getFirestore(app);
