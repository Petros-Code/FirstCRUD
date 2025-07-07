import { getAllProducts, getProductsById } from "../services/productService.js";

const getAllProductsController = (req, res) => {
  const allProducts = getAllProducts();
  res.json(allProducts);
};

const getProductsByIdController = (req, res) => {
  const id = parseInt(req.params.id);
  const product = getProductsById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Produit non trouvé" });
  }
};

export { getAllProductsController, getProductsByIdController };
