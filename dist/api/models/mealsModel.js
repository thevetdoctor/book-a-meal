'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// api/models/mealsModel.js

var meal = function meal(sequelize, DataTypes) {
  var Meal = sequelize.define('meal', {
    id: {
      type: DataTypes.INTEGER,
      // defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      unique: true
    },

    price: {
      type: DataTypes.STRING,
      unique: false
    }
  }, { timestamps: false });

  return Meal;
};

exports.default = meal;