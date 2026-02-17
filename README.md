# API REST en Node.js

## Descripción

API REST para gestión de productos desarrollada con Node.js y Express.

## Instalación

1. Clonar el repositorio.
2. Instalar dependencias:

```
npm install
```

3. Configurar variables de entorno:

   ```
   #Copiar el archivo de ejemplo y completar los datos requeridos
   cp .env-example .env
   ```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

Ejecutar en modo desarrollo:

```
npm run dev
```

## Documentación de la API

### Obtener todos los productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```
[
  { id: 1, name: 'Camiseta Deportiva', price: 150.99, categories: ["ropa", "deportes"] },
  { id: 2, name: 'Zapatillas Running', price: 1200.99, categories: ["calzado", "deportes"] },
  { id: 3, name: 'Mochila Escolar', price: 350.99, categories: ["mochilas", "escolar"] },
  { id: 4, name: 'Auriculares Bluetooth', price: 800.99, categories: ["tecnología", "audio"] },
  { id: 5, name: 'Botella Térmica', price: 220.99, categories: ["hogar", "accesorios"] },
  { id: "7ljhrlvdCcQ0f2jjluEY", name: "Nuevo Producto", price: 100.99, 
    categories: ["Categoria 1", "Categoria 2"] }
];

```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve todos los productos cuyo nombre contengan la palabra indicada.
- **Párametros:**

  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `products/search?name=camiseta`
- **Respuesta de ejemplo:**

  ```
  [{ id: 1, name: 'Camiseta Deportiva', price: 150.99, categories: ["ropa", "deportes"] }];
  ```

### Obtener producto ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Párametros:**

  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `products/7ljhrlvdCcQ0f2jjluEY`
- **Respuesta de ejemplo:**

  ```
  { 
   "id": "7ljhrlvdCcQ0f2jjluEY"
   "categories": ["Categoria 1", "Categoria 2"], 
   "price": 100.99,
   "name": "Nuevo Producto"
  }
  ```

### Crear un producto

- **POST** `/products`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON)**:

  ```
  { 
   "categories": ["Categoria 1", "Categoria 2"], 
   "price": 100.99,
   "name": "Producto 1"
  }
  ```
- **Respuesta de ejemplo:**

  ```
  { 
   "id": "7ljhrlvdCcQ0f2jjluEY"
   "categories": ["Categoria 1", "Categoria 2"], 
   "price": 100.99,
   "name": "Nuevo Producto"
  }
  ```

### Eliminar un producto

- **DELETE** `/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar.
- **Respuesta:** 204 No Content
- Si los datos enviados no son correctos, obtenemos:
- **Respuesta:** 404 Not Found
