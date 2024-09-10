const sequelize = require('../config/db');
const User = require('./user');
const Order = require('./order');
const Product = require('./product');
const OrderProduct = require('./orderProduct');

const initModels = async () => {
  try {
    User.hasMany(Order, {foreignKey: 'userId'});
    Order.belongsTo(User, {foreignKey: 'userId'});
    Order.belongsToMany(Product, { through: OrderProduct, foreignKey: 'orderId' });
    Product.belongsToMany(Order, { through: OrderProduct, foreignKey: 'productId' });

    await sequelize.sync();
    console.log('Modelli sincronizzati.');
  } catch (error) {
    console.error('Errore nel sincronizzare i modelli:', error);
  }
};

module.exports = {
  initModels,
  User,
  Order,
  Product,
  OrderProduct,
};