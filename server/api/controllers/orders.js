// api/controllers/orders.js

import ordersRecord from '../models/orders';

const ordersController = {
  makeOrder: (req, res) => {
    const order = {
      id: ordersRecord.length,
      userId: req.body.userId,
      mealId: req.body.mealId,
      date: new Date().toDateString(),
    };

    if (order) {
      ordersRecord.push(order);

      res.status(200).json({
        status: 200,
        data: order,
        message: `Order ${order.id} recorded`,
      });
    } else {
      res.status(404).json({
        error: 'Order not received',
      });
    }
  },
};

export default ordersController;
