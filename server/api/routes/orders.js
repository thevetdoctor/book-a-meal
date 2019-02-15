// api/routes/orders.js

import express from 'express';
import ordersController from '../controllers/orders';

const router = express.Router();


router.post('/', ordersController.makeOrder);

router.get('/', ordersController.getOrders);

router.put('/{id}', ordersController.modifyOrder);


export default router;
