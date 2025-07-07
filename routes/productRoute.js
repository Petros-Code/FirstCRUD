import express from "express";
const router = express.Router();

import {
  getAllProductsController,
  getProductsByIdController,
} from "../controllers/productController.js";

router.get("/products", getAllProductsController);
router.get("/:id", getProductsByIdController);
// router.get("products/:id", getProductById);

export default router;
