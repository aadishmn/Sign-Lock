import "firebase/app";
import { initializeApp } from "firebase/app";

import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBgJpZCqOTDfJjv9Xjg4DGDgAi_ef8smz0",
  authDomain: "sign-lock-cbed1.firebaseapp.com",
  projectId: "sign-lock-cbed1",
  storageBucket: "sign-lock-cbed1.appspot.com",
  messagingSenderId: "513177838339",
  appId: "1:513177838339:web:d9a2db1df28053def0bf36",
});

const storage = getStorage(firebaseConfig);

export default storage;
