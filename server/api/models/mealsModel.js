// api/models/mealsModel.js

const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('meal', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      unique: true,
    },

    price: {
      type: DataTypes.STRING,
      unique: false,
    },
  });

  return Meal;
};

export default meal;
