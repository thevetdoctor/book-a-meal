// api/controllers/orders.js
import models from '../models';

const ordersController = {

  makeOrder: (req, res) => {
    const order = {
      id: null,
      userId: req.body.userId,
      mealId: req.body.mealId,
      date: new Date().toDateString(),
    };

    models.Order.findAll()
      .then((response) => {
        const ordersIds = response.map(value => value.id);
        const lastOrderId = Math.max(...ordersIds);
        order.id = lastOrderId + 1;

        if (order.userId === undefined || order.mealId === undefined) {
          res.status(400).json({
            status: 400,
            data: {
              message: 'Order incomplete',
            },
          });
        } else {
          models.Order.create(order)
            .then((result) => {
              if (result) {
                res.status(200).json({
                  status: 200,
                  data: order,
                  message: `Order ${order.id} created`,
                });
              } else {
                res.status(400).json({
                  status: 400,
                  error: 'Not successful',
                });
              }
            });
        }
      });
  },


  getOrders: (req, res) => {
    models.Order.findAll({ where: { date: new Date().toDateString() } })
      .then((orders) => {
        if (orders.length > 0) {
          res.status(200).json({
            status: 200,
            data: orders,
            message: 'Orders displayed for today',
          });
        } else {
          res.status(400).json({
            status: 400,
            error: 'No orders available',
          });
        }
      });
  },

  modifyOrder: (req, res) => {
    const orderId = parseInt(req.params.id, 10);
    const meal = req.body.mealId;
    // const user = req.body.userId;

    if (meal === undefined) {
      res.status(400).json({
        status: 400,
        error: 'Order not modified',
      });
    } else {
      models.Order.update({ values: { mealId: meal } }, { where: { id: orderId } })
        .then((response) => {
          if (response) {
            res.status(200).json({
              status: 200,
              data: response,
              message: 'Order updated',
            });
          } else {
            res.status(400).json({
              status: 400,
              error: `Order id ${orderId} not available`,
            });
          }
        });
    }
  },
};

export default ordersController;
