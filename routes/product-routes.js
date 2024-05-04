const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");

// Get all product
router.get("/product", productController.getAllProducts);

// Get a product by ID
router.get("/product/:id", productController.getProductById);

// Create a new product
router.post("/product", productController.createProduct);

// Update a product by ID
router.put("/product/:id", productController.updateProduct);

// Delete a product by ID
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
