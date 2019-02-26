'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _orders = require('../controllers/orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import auth from '../../auth/index';

// api/routes/orders.js

var router = _express2.default.Router();

router.post('/', _orders2.default.makeOrder);

router.get('/', _orders2.default.getOrders);

router.put('/:id', _orders2.default.modifyOrder);

exports.default = router;