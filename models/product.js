const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  localGuide: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  scoreCity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  scoreHistory: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  scoreNature: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  scoreParty: {
    type: DataTypes.INTEGER,
  },
  scoreRelax: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'Product',
  timestamps: false,
});

module.exports = Product;
