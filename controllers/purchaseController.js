import { createPurchase } from "../services/purchaseService.js";

const postPurchaseController = (req, res) => {
  const { "user-id": userId, "product-id": productId } = req.body;

  if (typeof userId !== "number" || typeof productId !== "number") {
    return res.status(400).json({ error: "Champs manquants ou invalides" });
  }

  const result = createPurchase(userId, productId);

  if (result.error) {
    return res.status(404).json(result);
  }

  res.status(201).json(result);
};

export { postPurchaseController };
