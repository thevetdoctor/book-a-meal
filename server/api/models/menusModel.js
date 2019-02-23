// api/models/menusModel.js

const menu = (sequelize, DataTypes) => {
  const Menu = sequelize.define('menu', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },

    date: {
      type: DataTypes.DATE,
      unique: false,
    },

    // list: {
    //   type: DataTypes.ARRAY,
    //   unique: false,
    // },
  });

  return Menu;
};

export default menu;
