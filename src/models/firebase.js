// Importar las funciones necesarias de los SDKs de Firebase que se necesitan
import { initializeApp } from "firebase/app";

// Importar firestore
import { getFirestore } from "firebase/firestore";

// TODO: Agregar SDKs para Firebase que se necesiten  
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAm6iUzmL7XZJZzdxR-NRdxMyznntSqZlo",
  authDomain: "api-rest-node-aa5b7.firebaseapp.com",
  projectId: "api-rest-node-aa5b7",
  storageBucket: "api-rest-node-aa5b7.firebasestorage.app",
  messagingSenderId: "16861463915",
  appId: "1:16861463915:web:157649420bafdbbab5382e"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);
export { db };