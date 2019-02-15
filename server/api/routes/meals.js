// api/routes/meals.js

// import { Route } from 'express';

import express from 'express';
import mealsController from '../controllers/meals';

const router = express.Router();


router.post('/', mealsController.addMeal);

router.put('/', mealsController.modifyMeal);

router.delete('/', mealsController.deleteMeal);


export default router;
