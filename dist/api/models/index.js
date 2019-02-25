'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// api/models/index.js

var sequelize = new _sequelize2.default(_config2.default.database, _config2.default.username, _config2.default.password, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5433
});

var models = {
  Meal: sequelize.import('./mealsModel'),
  Menu: sequelize.import('./menusModel'),
  Order: sequelize.import('./ordersModel'),
  User: sequelize.import('./usersModel')
};

Object.keys(models).forEach(function (key) {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

exports.sequelize = sequelize;
exports.default = models;