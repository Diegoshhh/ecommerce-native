import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBEz9C0eGcx_BEZCNUSLPOc1NimAndlOKo",
  authDomain: "tenedores-777ba.firebaseapp.com",
  projectId: "tenedores-777ba",
  storageBucket: "tenedores-777ba.appspot.com",
  messagingSenderId: "57204962502",
  appId: "1:57204962502:web:5e38d55acedff835ded3c7"
};

export const initFirebase = initializeApp(firebaseConfig);