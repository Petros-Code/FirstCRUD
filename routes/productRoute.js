import express from "express";
const router = express.Router();

import { getAllProductsController } from "../controllers/productController.js";

router.get("/products", getAllProductsController);
// router.get("products/:id", getProductById);

export default router;
