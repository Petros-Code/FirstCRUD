import { getAllProducts } from "../services/productService.js";

const getAllProductsController = (req, res) => {
  const allProducts = getAllProducts();
  res.json(allProducts);
};

export { getAllProductsController };
