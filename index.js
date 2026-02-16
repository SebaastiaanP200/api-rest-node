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

app.get('/', (req, res) => {
  res.json({ "message": "¡Bienvenidos a nuestra API REST!" });
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(product);
});

import notFoundMiddleware from './src/middlewares/not-found.js';
app.use(notFoundMiddleware);


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));


