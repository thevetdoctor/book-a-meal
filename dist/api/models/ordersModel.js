'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// api/models/ordersModel.js

var order = function order(sequelize, DataTypes) {
  var Order = sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      // defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },

    userId: {
      type: DataTypes.INTEGER,
      unique: false
    },

    mealId: {
      type: DataTypes.INTEGER,
      unique: false
    },

    date: {
      // type: DataTypes.DATE,
      type: DataTypes.STRING,
      unique: false
    }
  }, { timestamps: false });

  Order.associate = function (models) {
    Order.belongsTo(models.User);
  };

  return Order;
};

exports.default = order;