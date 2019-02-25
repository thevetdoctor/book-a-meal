'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // api/controllers.menu.js

var menusController = {
  addMenu: function addMenu(req, res) {
    var menu = {
      id: null,
      date: new Date().toDateString(),
      list: []
    };

    _models2.default.Menu.findAll({ where: { date: new Date().toDateString() } }).then(function (menus) {
      var menuIds = menus.map(function (x) {
        return x.id;
      });
      var menuDates = menus.map(function (y) {
        return y.date;
      });
      var lastId = Math.max.apply(Math, _toConsumableArray(menuIds));
      if (!menuDates.includes(menu.date)) {
        menu.id = lastId + 1;
        _models2.default.Menu.create(menu).then(function (result) {
          res.status(200).json({
            status: 200,
            data: result,
            message: 'New Menu created'
          });
        });
      } else {
        res.status(400).json({
          status: 400,
          error: 'Menu already exist'
        });
      }
    });
  },

  getMenu: function getMenu(req, res) {
    _models2.default.Menu.findAll({ where: { date: new Date().toDateString() } }).then(function (menus) {
      if (menus.length > 0) {
        res.status(200).json({
          status: 200,
          data: menus,
          message: 'Menu displayed'
        });
      } else {
        res.status(400).json({
          status: 400,
          error: 'Menu not available'
        });
      }
    });
  }
};

exports.default = menusController;