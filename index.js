import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Bienvenidos a nuestra API REST!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



