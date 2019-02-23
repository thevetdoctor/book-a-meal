// api/models/usersModel.js

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      unique: false,
    },

    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
  });

  return User;
};

export default user;
