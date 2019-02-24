// api/models/usersModel.js

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      // defaultValue: DataTypes.UUIDV1,
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
  }, { timestamps: true });

  // User.associate = (models) => {
  //   User.hasMany(models.Order, { onDelete: 'CASCADE' });
  // };

  return User;
};

export default user;
