//le rotte sono gli endpoint che indirizzano le richieste http ai controller appropriati
const express = require('express');
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const productRoutes = require('./productRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/products', productRoutes);

module.exports = router;