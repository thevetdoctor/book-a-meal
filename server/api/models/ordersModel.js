// api/models/ordersModel.js

const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      // defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      unique: false,
    },

    mealId: {
      type: DataTypes.INTEGER,
      unique: false,
    },

    date: {
      type: DataTypes.DATE,
      unique: false,
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User);
  };

  return Order;
};

export default order;
