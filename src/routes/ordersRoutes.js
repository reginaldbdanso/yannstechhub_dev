const express = require('express');
const { 
  createOrder, 
  getOrders, 
  getOrder,
  deleteOrder 
} = require('../controllers/ordersController');
const { protect } = require('../middleware/auth');
const multer = require('multer');
const router = express.Router();

const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

router.post('/', protect, upload.single('image'), createOrder);
router.get('/', protect, getOrders);
router.get('/:id', protect, getOrder);
router.delete('/:id', protect, deleteOrder);

module.exports = router;