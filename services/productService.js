import products from "../models/productModel.js";

const getAllProducts = () => {
  return products;
};

const getProductsById = (id) => {
  return products.find((p) => p.id === id);
};

export { getAllProducts, getProductsById };
