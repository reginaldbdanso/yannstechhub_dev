const OrderService = require('../services/order/orderService');

exports.createOrder = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'Order image is required' 
      });
    }

    const order = await OrderService.createOrder(
      { name, description, price, category, stock },
      req.file.buffer,
      req.user._id
    );

    res.status(201).json({ success: true, order });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await OrderService.getOrders();
    res.json({ success: true, orders });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    res.json({ success: true, order });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message === 'Order not found' ? error.message : 'Error retrieving order'
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const result = await OrderService.deleteOrder(req.params.id, req.user._id);
    res.json({ success: true, ...result });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
};