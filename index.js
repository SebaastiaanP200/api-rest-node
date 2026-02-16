import express from 'express';
const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: 'Camiseta Deportiva', price: 150.99, categories: ["ropa", "deportes"] },
  { id: 2, name: 'Zapatillas Running', price: 1200.99, categories: ["calzado", "deportes"] },
  { id: 3, name: 'Mochila Escolar', price: 350.99, categories: ["mochilas", "escolar"] },
  { id: 4, name: 'Auriculares Bluetooth', price: 800.99, categories: ["tecnología", "audio"] },
  { id: 5, name: 'Botella Térmica', price: 220.99, categories: ["hogar", "accesorios"] },
];

// Bienvenida a la API
app.get('/', (req, res) => {
  res.json({ "message": "¡Bienvenidos a nuestra API REST!" });
});

// Endpoint para obtener todos los productos o filtrar por categoría
app.get('/products', (req, res) => {
  const {category} = req.query;
  if (category) {
    const productsFiltered = products.filter(item => item.categories.includes(category));
    return res.json(productsFiltered);
  } 
  return res.json(products);
});

// Endpoint para buscar productos por nombre
app.get('/products/search', (req, res) => {
  const {name} = req.query;
  if(!name) {
    return res.status(400).json({error: "El nombre es requerido"});
  }
  const productsFiltered = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
  if(!productsFiltered.length) {
    return res.status(404).json({error: "No se encontraron productos con ese nombre"});
  }
  res.json(productsFiltered);
});

// Endpoint para obtener un producto por su ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    res.status(404).json({ error: "Producto no encontrado" });
  }
  res.json(product);
});

// Middleware para manejar rutas no encontradas
import notFoundMiddleware from './src/middlewares/not-found.js';
app.use(notFoundMiddleware);

// App listener
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));


