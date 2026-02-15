import express from 'express';
const app = express();

// app.use((req, res, next) => {});

app.get('/', (req, res) => {
  res.json({ "message": "¡Bienvenidos a nuestra API REST!" });
});

import notFound from './src/middlewares/not-found.js';
app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));


