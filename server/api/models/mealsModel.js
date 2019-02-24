// api/models/mealsModel.js

const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('meal', {
    id: {
      type: DataTypes.INTEGER,
      // defaultValue: DataTypes.UUIDV1,
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
  }, { timestamps: false });

  return Meal;
};

export default meal;
