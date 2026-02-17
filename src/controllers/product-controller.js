import * as Model from '../models/products.js';

// Endpoint para obtener todos los productos o filtrar por categoría
export const getAllProducts = async (req, res) => {
  const {category} = req.query;
  const products = await Model.getAllProducts();
  if (category) {
    const productsFiltered = products.filter(item => item.categories.includes(category));
    return res.json(productsFiltered);
  } 
  return res.json(products);
};

// Endpoint para buscar productos por nombre
export const seacrhProductsByName = (req, res) => {
  const {name} = req.query;
  const products = Model.getAllProducts();
  if(!name) {
    return res.status(400).json({error: "El nombre es requerido"});
  }
  const productsFiltered = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
  if(!productsFiltered.length) {
    return res.status(404).json({error: "No se encontraron productos con ese nombre"});
  }
  res.json(productsFiltered);
}

// Endpoint para obtener un producto por su ID
export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await Model.getProductById(id);
  
  if (!product) {
    res.status(404).json({ error: "Producto no encontrado" });
  }
  res.json(product);
};

// 
export const createProduct = async (req, res) => {
  const { name, price, categories } = req.body;
  const product = await Model.createProduct({ name, price, categories });
  res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deleted = await Model.deleteProduct(id);
  
  if(!deleted) {
    return res.status(404).json({ error: "El producto no ha sido borrado"})
  }
  res.status(204).send();
};