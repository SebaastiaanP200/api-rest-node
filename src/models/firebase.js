// Importar las funciones necesarias de los SDKs de Firebase que se necesitan
import { initializeApp } from "firebase/app";

// Importar firestore
import { getFirestore } from "firebase/firestore";

// TODO: Agregar SDKs para Firebase que se necesiten  
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase
const firebaseConfig = {
  apiKey:  process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);
export { db };