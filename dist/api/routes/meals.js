'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _meals = require('../controllers/meals');

var _meals2 = _interopRequireDefault(_meals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import auth from '../../auth/index';

// api/routes/meals.js

// import { Route } from 'express';

var router = _express2.default.Router();

router.post('/', _meals2.default.addMeal);

router.put('/:id', _meals2.default.modifyMeal);

router.delete('/:id', _meals2.default.deleteMeal);

router.get('/', _meals2.default.getAllMeals);

exports.default = router;