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
    const date = new Date().toDateString();
    const orderArray = ordersRecord.filter(order => order.date === date);

    if (orderArray) {
      res.status(200).json({
        status: 200,
        data: orderArray,
        message: `Orders displayed for ${date}`,
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

    if (foundOrder === undefined) {
      res.status(400).json({
        status: 400,
        message: `Order id ${orderId} not available`,
      });
    } else if (foundOrder.mealId === undefined || foundOrder.mealId === '' || foundOrder.mealId == null) {
      res.status(400).json({
        status: 400,
        message: 'No input supplied',
      });
    }

    if (foundOrder) {
      if (foundOrder.mealId === req.body.mealId) {
        res.status(400).json({
          status: 400,
          message: 'Meal already exist on this order',
        });
      }
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
