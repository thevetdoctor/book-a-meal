'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _meals = require('../controllers/meals');

var _meals2 = _interopRequireDefault(_meals);

var _index = require('../auth/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // api/routes/meals.js

// import { Route } from 'express';

router.post('/', _meals2.default.addMeal);

router.put('/:id', _meals2.default.modifyMeal);

router.delete('/:id', _meals2.default.deleteMeal);

router.get('/', _meals2.default.getAllMeals);

exports.default = router;