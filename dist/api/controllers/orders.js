'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // api/controllers/orders.js


var ordersController = {

  makeOrder: function makeOrder(req, res) {
    var order = {
      id: null,
      userId: req.body.userId,
      mealId: req.body.mealId,
      date: new Date().toDateString()
    };

    _models2.default.Order.findAll().then(function (response) {
      var ordersIds = response.map(function (value) {
        return value.id;
      });
      var lastOrderId = Math.max.apply(Math, _toConsumableArray(ordersIds));
      order.id = lastOrderId + 1;

      if (order.userId === undefined || order.mealId === undefined) {
        res.status(400).json({
          status: 400,
          data: {
            message: 'Order incomplete'
          }
        });
      } else {
        _models2.default.Order.create(order).then(function (result) {
          if (result) {
            res.status(200).json({
              status: 200,
              data: order,
              message: 'Order ' + order.id + ' created'
            });
          } else {
            res.status(400).json({
              status: 400,
              error: 'Not successful'
            });
          }
        });
      }
    });
  },

  getOrders: function getOrders(req, res) {
    _models2.default.Order.findAll({ where: { date: new Date().toDateString() } }).then(function (orders) {
      if (orders.length > 0) {
        res.status(200).json({
          status: 200,
          data: orders,
          message: 'Orders displayed for today'
        });
      } else {
        res.status(400).json({
          status: 400,
          error: 'No orders available'
        });
      }
    });
  },

  modifyOrder: function modifyOrder(req, res) {
    var orderId = parseInt(req.params.id, 10);
    var meal = req.body.mealId;

    if (meal === undefined) {
      res.status(400).json({
        status: 400,
        error: 'Order not modified'
      });
    } else {
      _models2.default.Order.update({ mealId: meal }, { where: { id: orderId } }, { returning: true }).then(function (response) {
        if (response) {
          res.status(200).json({
            status: 200,
            data: response,
            message: 'Order updated'
          });
        } else {
          res.status(400).json({
            status: 400,
            error: 'Order id ' + orderId + ' not available'
          });
        }
      });
    }
  }
};

exports.default = ordersController;