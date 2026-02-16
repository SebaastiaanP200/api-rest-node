import { db } from "./firebase.js";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");


export const getAllProducts = async () => {
  try{
    const productsSnapshot = await getDocs(productsCollection);
    return productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch(error){console.error("Error al obtener los productos:", error);}
}

export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const productSnapshot = await getDoc(productRef);
    return productSnapshot.exists() ? { id: productSnapshot.id, ...productSnapshot.data() } : null;
  } catch (error) {console.error(`Error al obtener el producto por ID ${id}:`, error);}
}