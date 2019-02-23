// api/models/index.js

import Sequelize from 'sequelize';
import config from '../../config';


const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
  },
);

const models = {
  Meal: sequelize.import('./mealsModel'),
  Menu: sequelize.import('./menusModel'),
  Order: sequelize.import('./ordersModel'),
  User: sequelize.import('./usersModel'),
};

export { sequelize };

export default models;
