// api/routes/orders.js

import express from 'express';
import ordersController from '../controllers/orders';
import auth from '../auth/index';

const router = express.Router();


router.post('/', auth, ordersController.makeOrder);

router.get('/', auth, ordersController.getOrders);

router.put('/:id', auth, ordersController.modifyOrder);


export default router;
