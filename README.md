# API REST en Node.js


## Descripción

API REST para gestión de productos desarrollada con Node.js y Express.


## Instalación

1. Clonar el repositorio.
2. Instalar dependencias:

```powershell
npm install
```

3. Configurar variables de entorno:

   ```
   #Copiar el archivo de ejemplo y completar los datos requeridos
   cp .env-example .env
   ```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.


Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentación de la API 



## Obtener todos los productos


- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
  { id: 1, name: 'Camiseta Deportiva', price: 150.99, categories: ["ropa", "deportes"] },
  { id: 2, name: 'Zapatillas Running', price: 1200.99, categories: ["calzado", "deportes"] },
  { id: 3, name: 'Mochila Escolar', price: 350.99, categories: ["mochilas", "escolar"] },
  { id: 4, name: 'Auriculares Bluetooth', price: 800.99, categories: ["tecnología", "audio"] },
  { id: 5, name: 'Botella Térmica', price: 220.99, categories: ["hogar", "accesorios"] },
];

```
