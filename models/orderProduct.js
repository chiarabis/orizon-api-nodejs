const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OrderProduct = sequelize.define('OrderProduct', {
  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Order',
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Product',
      key: 'id',
    },
  }
}, {
  tableName: 'OrderProduct',
  timestamps: false,
});

module.exports = OrderProduct;
