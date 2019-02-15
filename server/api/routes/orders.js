// api/routes/orders.js

import express from 'express';
import ordersController from '../controllers/orders';

const router = express.Router();


router.post('/', ordersController.makeOrder);

export default router;
