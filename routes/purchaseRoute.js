import express from "express";
import { postPurchaseController } from "../controllers/purchaseController.js";

const router = express.Router();

router.post("/", postPurchaseController);

export default router;
