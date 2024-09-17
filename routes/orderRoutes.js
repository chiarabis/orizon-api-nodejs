const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

router.get('/', orderController.getOrders);
router.get('/date', orderController.filterOrdersByDate);
router.get('/product', orderController.filterOrdersByProduct);

module.exports = router;