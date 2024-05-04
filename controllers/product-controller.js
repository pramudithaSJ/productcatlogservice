const Product = require("../models/product-model");

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      data: products,
      message: "All Products Fetched Successfully",
      status: 200,
      success: true,
      errorMessages: null,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: 500,
      success: false,
      errorMessages: err.message,
    });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({
      data: product,
      message: "Product Fetched Successfully",
      status: 200,
      success: true,
      errorMessages: null,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: 500,
      success: false,
      errorMessages: err.message,
    });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    const newProduct = await product.save();
    res.status(201).json({
      data: newProduct,
      message: "Product Created Successfully",
      status: 201,
      success: true,
      errorMessages: null,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      status: 400,
      success: false,
      errorMessages: err.message,
    });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        status: 404,
        success: false,
        errorMessages: "Product not found",
      });
    }
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.quantity = req.body.quantity || product.quantity;
    const updatedProduct = await product.save();
    res.json({
      data: updatedProduct,
      message: "Product Updated Successfully",
      status: 200,
      success: true,
      errorMessages: null,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      status: 400,
      success: false,
      errorMessages: err.message,
    });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        status: 404,
        success: false,
        errorMessages: "Product not found",
      });
    }
    console.log(product);

    const result = await Product.findByIdAndDelete(req.params.id);
    
    res.json({
      message: "Product Deleted Successfully",
      status: 200,
      success: true,
      errorMessages: null,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: 500,
      success: false,
      errorMessages: err.message,
    });
  }
};
