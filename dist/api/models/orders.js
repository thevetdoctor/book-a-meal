"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// api/models/orders.js

var ordersRecord = [{
  id: 1,
  userId: 1,
  mealId: 1,
  date: new Date().toDateString()

}, {
  id: 2,
  userId: 1,
  mealId: 2,
  date: new Date().toDateString()
}, {
  id: 3,
  userId: 1,
  mealId: 3,
  date: new Date().toDateString()
}, {
  id: 4,
  userId: 4,
  mealId: 2,
  date: new Date().toDateString()
}, {
  id: 5,
  userId: 3,
  mealId: 1,
  date: new Date().toDateString()
}, {
  id: 6,
  userId: 3,
  mealId: 2,
  date: new Date().toDateString()
}];

exports.default = ordersRecord;