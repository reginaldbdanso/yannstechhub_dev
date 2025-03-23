const { StatusCodes } = require('http-status-codes');
const cartService = require('../services/cart/cartService');

// Get cart by user ID
const getCart = async (req, res) => {
  try {
    const cart = await cartService.getCartByUserId(req.user.id);
    if (!cart) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Cart not found' });
    }
    res.status(StatusCodes.OK).json(cart);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

// Add item to cart
const addCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await cartService.addToCart(req.user.userId, productId, quantity);
    res.status(StatusCodes.OK).json(cart);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

// Update cart item quantity
const updateCartContent = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await cartService.updateCartItem(req.user.userId, productId, quantity);
    if (!cart) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Cart or item not found' });
    }
    res.status(StatusCodes.OK).json(cart);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

// Remove item from cart
const removeItemFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await cartService.removeFromCart(req.user.userId, productId);
    if (!cart) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Cart not found' });
    }
    res.status(StatusCodes.OK).json(cart);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

// Clear cart
const clearEntireCart = async (req, res) => {
  try {
    const result = await cartService.clearCart(req.user.userId);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Cart not found' });
    }
    res.status(StatusCodes.OK).json({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = {
  getCart,
  addCart,
  updateCartContent,
  removeItemFromCart,
  clearEntireCart
};

