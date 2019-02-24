/* eslint-disable no-console */
// api/controllers/meals.js

import models from '../models';


const mealsController = {

  addMeal: (req, res) => {
    const meal = {
      id: null,
      name: req.body.name,
      price: req.body.price,
    };
    models.Meal.findAll()
      .then((response) => {
        const ids = response.map(value => value.id);
        const mealNames = response.map(value => value.name);
        const lastId = Math.max(...ids);
        if (!mealNames.includes(meal.name)) {
          meal.id = lastId + 1;
          models.Meal.create(meal)
            .then((result) => {
              res.status(201).json({
                status: 201,
                data: result,
                message: 'New Meal Added',
              });
            });
        } else {
          res.status(400).json({
            status: 400,
            error: 'Invalid input',
          });
        }
      });
  },


  modifyMeal: (req, res) => {
    const mealId = parseInt(req.params.id, 10);
    const mealName = req.body.name;
    const mealPrice = req.body.price;
    console.log(mealId);
    console.log(req.body.name);
    console.log(req.body.price);
    models.Meal.update({ values: { name: mealName, price: mealPrice } }, { where: { id: mealId } })
      .then((response) => {
        res.status(200).json({
          status: 200,
          data: response,
        });
      });
  },


  deleteMeal: (req, res) => {
    const mealId = parseInt(req.params.id, 10);
    models.Meal.destroy({ where: { id: mealId } })
      .then((response) => {
        if (response > 0) {
          res.status(200).json({
            status: 200,
            data: [{ message: `Meal with ID ${mealId} deleted` }],
          });
        } else {
          res.status(400).json({
            status: 400,
            error: 'Meal not deleted',
          });
        }
      });
  },


  getAllMeals: (req, res) => {
    models.Meal.findAll()
      .then((meals) => {
        if (meals.length > 0) {
          console.log(meals);
          res.status(200).json({
            status: 200,
            data: meals,
          });
        } else {
          res.status(400).json({
            status: 400,
            error: 'All meals displayed',
          });
        }
      });
  },
};

export default mealsController;
