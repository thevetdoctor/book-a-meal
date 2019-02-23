// api/routes/orders.js

import express from 'express';
import ordersController from '../controllers/orders';
import auth from '../auth/index';

const router = express.Router();


router.post('/', ordersController.makeOrder);

router.get('/', ordersController.getOrders);

router.put('/:id', ordersController.modifyOrder);


export default router;
