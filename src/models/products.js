import { db } from "./firebase.js";
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from "firebase/firestore";

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

export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };   
  } catch (error) {console.error(`Error al crear el nuevo producto ${id}:`, error);}
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const productSnapshot = await getDoc(productRef);
    if (!productSnapshot.exists()) {
      return false;
    }
    await deleteDoc(productRef);
    return true;  
  } catch (error) {console.error(`Error al borrar el producto ${id}:`, error);}
}