const ProductService = require('../services/product/productService');

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'Product image is required' 
      });
    }

    const product = await ProductService.createProduct(
      { name, description, price, category, stock },
      req.file.buffer,
      req.user._id
    );

    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await ProductService.getProducts();
    res.json({ success: true, products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    res.json({ success: true, product });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message === 'Product not found' ? error.message : 'Error retrieving product'
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const result = await ProductService.deleteProduct(req.params.id, req.user._id);
    res.json({ success: true, ...result });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
};