// api/controllers/meals.js

import mealsRecord from '../models/meals';

const mealsController = {
  addMeal: (req, res) => {
    const meal = {
      id: null,
      name: req.body.name,
      price: req.body.price,
    };
    if (!mealsRecord.find(meals => meals.name === meal.name)) {
      meal.id = mealsRecord.length + 1;
      mealsRecord.push(meal);
      res.status(201).json({
        status: 201,
        data: {
          id: meal.id,
          name: meal.name,
          price: meal.price,
        },
        message: 'New Meal Added',
      });
    } else {
      res.status(404).json({
        error: 'Invalid input',
      });
    }
  },

  modifyMeal: (req, res) => {
    const mealId = parseInt(req.params.id, 10);

    const findingMeal = meal => meal.id === mealId;
    const foundMeal = mealsRecord.find(findingMeal);

    if (foundMeal) {
      if (foundMeal.name === req.body.name) {
        res.status(404).json({
          status: 404,
          error: 'Same meal already exist',
        });
      }
      foundMeal.name = req.body.name;
      foundMeal.price = req.body.price;

      res.status(200).json({
        status: 200,
        data: {
          id: foundMeal.id,
          name: foundMeal.name,
          price: foundMeal.price,
        },
        message: `meal with ID ${foundMeal.id} modified`,
      });
    } else {
      res.status(404).json({
        status: 404,
        error: 'Meal not modified',
      });
    }
  },

  deleteMeal: (req, res) => {
    const mealId = parseInt(req.params.id, 10);

    const findingMeal = meal => meal.id === mealId;
    const foundMeal = mealsRecord.find(findingMeal);
    if (foundMeal) {
      mealsRecord.splice(foundMeal.id - 1, 1);

      res.status(200).json({
        status: 200,
        message: `Meal with ID ${foundMeal.id} deleted`,
      });
    } else {
      res.status(404).json({
        error: 'Meal not deleted',
      });
    }
  },

  getAllMeals: (req, res) => {
    if (mealsRecord.length > 0) {
      res.status(200).json({
        status: 200,
        data: mealsRecord,
        message: 'All meals displayed',
      });
    } else {
      res.status(404).json({
        error: 'No meals in record',
      });
    }
  },
};

export default mealsController;
