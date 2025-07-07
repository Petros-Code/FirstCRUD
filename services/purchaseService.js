import products from "../models/productModel.js";
import users from "../models/userModel.js";
import purchases from "../models/purchaseModel.js";

const createPurchase = (userId, productId) => {
  const user = users.find((u) => u["user-id"] === userId);
  const product = products.find((p) => p["product-id"] === productId);

  if (!user) {
    return { error: "Utilisateur non trouvé" };
  }

  if (!product) {
    return { error: "Produit non trouvé" };
  }

  const newPurchase = { "user-id": userId, "product-id": productId };
  purchases.push(newPurchase);
  return { message: "Achat enregistré avec succès", purchase: newPurchase };
};

export { createPurchase };
