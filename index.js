import express from 'express';
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  // res.json({ 'message': 'Hola Middleware' });
  console.log(req.method);
  next();
});

app.get('/', (req, res) => {
  res.json({ "message": "¡Bienvenidos a nuestra API REST!" });
});

import notFoundMiddleware from './src/middlewares/not-found.js';
app.use(notFoundMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


