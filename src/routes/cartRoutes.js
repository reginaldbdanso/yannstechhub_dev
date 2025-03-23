const express = require('express');
const { 
  getCart,
  addCart,
  updateCartContent,
  removeItemFromCart,
  clearEntireCart
} = require('../controllers/cartController.js');
const { protect } = require('../middleware/auth.js');

const router = express.Router();

// Protect all routes after this middleware
router.use(protect);

// Cart routes
router.route('/')
  .get(getCart)
  .post(addCart)
  .delete(clearEntireCart);

router.route('/:itemId')
  .put(updateCartContent)
  .delete(removeItemFromCart);

module.exports = router;
