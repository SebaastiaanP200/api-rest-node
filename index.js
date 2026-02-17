import 'dotenv/config';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Bienvenida a la API
app.get('/', (req, res) => {
  res.json({ "message": "¡Bienvenidos a nuestra API REST!" });
});

// Rutas de productos
import productsRouter from './src/routers/products-routers.js';
app.use('/api', productsRouter);

// Middleware para manejar rutas no encontradas
import notFoundMiddleware from './src/middlewares/not-found.js';
app.use(notFoundMiddleware);

// App listener
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));




