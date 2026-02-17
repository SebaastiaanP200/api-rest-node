import { Router } from 'express';

const router = Router();

import { getAllProducts, seacrhProductsByName, getProductById, createProduct, deleteProduct } from '../controllers/product-controller.js';

router.get('/products', getAllProducts);              // Endpoint para obtener todos los productos o filtrar por categoría
router.get('/products/search', seacrhProductsByName); // Endpoint para buscar productos por nombre
router.get('/products/:id', getProductById);          // Endpoint para obtener un producto por su ID

router.post('/products', createProduct);              // Endpoint para crear productos

router.delete('/products/:id', deleteProduct);

export default router;  

