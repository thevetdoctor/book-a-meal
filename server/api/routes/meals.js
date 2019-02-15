// api/routes/meals.js

// import { Route } from 'express';

import express from 'express';
import mealsController from '../controllers/meals';

const router = express.Router();


router.post('/', mealsController.addMeal);

router.put('/{id}', mealsController.modifyMeal);

router.delete('/{id}', mealsController.deleteMeal);


export default router;
