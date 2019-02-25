'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _menus = require('../controllers/menus');

var _menus2 = _interopRequireDefault(_menus);

var _index = require('../auth/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // api/routes/menus.js

router.post('/', _menus2.default.addMenu);

router.get('/', _menus2.default.getMenu);

exports.default = router;