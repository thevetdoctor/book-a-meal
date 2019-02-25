'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable no-console */
// api/controllers/meals.js

var mealsController = {

  addMeal: function addMeal(req, res) {
    var meal = {
      id: null,
      name: req.body.name,
      price: req.body.price
    };
    _models2.default.Meal.findAll().then(function (response) {
      var ids = response.map(function (value) {
        return value.id;
      });
      var mealNames = response.map(function (value) {
        return value.name;
      });
      var lastId = Math.max.apply(Math, _toConsumableArray(ids));
      if (!mealNames.includes(meal.name)) {
        meal.id = lastId + 1;
        _models2.default.Meal.create(meal).then(function (result) {
          res.status(201).json({
            status: 201,
            data: result,
            message: 'New Meal Added'
          });
        });
      } else {
        res.status(400).json({
          status: 400,
          error: 'Invalid input'
        });
      }
    });
  },

  modifyMeal: function modifyMeal(req, res) {
    var mealId = parseInt(req.params.id, 10);
    var mealName = req.body.name;
    var mealPrice = req.body.price;
    console.log(mealId);
    console.log(req.body.name);
    console.log(req.body.price);
    _models2.default.Meal.update({ name: mealName, price: mealPrice }, { where: { id: mealId } }).then(function (response) {
      res.status(200).json({
        status: 200,
        data: response
      });
    });
  },

  deleteMeal: function deleteMeal(req, res) {
    var mealId = parseInt(req.params.id, 10);
    _models2.default.Meal.destroy({ where: { id: mealId } }).then(function (response) {
      if (response > 0) {
        res.status(200).json({
          status: 200,
          data: [{ message: 'Meal with ID ' + mealId + ' deleted' }]
        });
      } else {
        res.status(400).json({
          status: 400,
          error: 'Meal not deleted'
        });
      }
    });
  },

  getAllMeals: function getAllMeals(req, res) {
    _models2.default.Meal.findAll().then(function (meals) {
      if (meals.length > 0) {
        console.log(meals);
        res.status(200).json({
          status: 200,
          data: meals,
          message: 'All meals displayed'
        });
      } else {
        res.status(400).json({
          status: 400,
          error: 'No meals available'
        });
      }
    });
  }
};

exports.default = mealsController;