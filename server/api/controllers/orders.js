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

  getOrders: (req, res) => {
    const { date } = req.body.date;
    const orderArray = ordersRecord.map(order => order.date === date);
    if (orderArray) {
      res.status(200).json({
        status: 200,
        data: orderArray,
        message: `Order displayed for ${date}`,
      });
    } else {
      res.status(404).json({
        error: 'No orders available',
      });
    }
  },

  modifyOrder: (req, res) => {
    const orderId = parseInt(req.params.id, 10);

    const findingOrder = order => order.id === orderId;
    const foundOrder = ordersRecord.find(findingOrder);

    if (foundOrder) {
      foundOrder.mealId = req.body.mealId;

      res.status(200).json({
        status: 200,
        data: foundOrder,
        message: 'Order modified successfully',
      });
    } else {
      res.status(404).json({
        error: 'Order not modified',
      });
    }
  },
};

export default ordersController;
