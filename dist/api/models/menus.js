'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _meals = require('./meals');

var _meals2 = _interopRequireDefault(_meals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menusRecord = [{
  id: 1,
  date: new Date().toDateString(),
  list: _meals2.default.filter(function (meal) {
    return meal.id <= 4;
  })
}, {
  id: 2,
  date: new Date().toDateString(),
  list: _meals2.default.filter(function (meal) {
    return meal.id <= 8 && meal.id > 4;
  })
}, {
  id: 3,
  date: new Date().toDateString(),
  list: _meals2.default.filter(function (meal) {
    return meal.id <= 12 && meal.id > 8;
  })
}]; // api/models/menus.js

exports.default = menusRecord;