// api/routes/meals.js

import express from 'express';
// import { Route } from 'express';

const router = express.Router();
const mealsController = '../controllers/meals';


router.post('/', mealsController.addMeal);

router.put('/', mealsController.modifyMeal);

router.delete('/', mealsController.deleteMeal);


export default router;
