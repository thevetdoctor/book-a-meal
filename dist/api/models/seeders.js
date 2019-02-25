'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mealsRecord from './meals';

// api/models/seeders.js

var seeders = {
  seedObj: async function seedObj() {
    await _index2.default.User.create({
      id: 1,
      name: 'obafemi',
      email: 'thevetdoctor@gmail.com',
      password: '123456',
      isAdmin: true
    });

    await _index2.default.User.create({
      id: 2,
      name: 'demilade',
      email: 'demilade@gmail.com',
      password: 'demilade',
      isAdmin: false
    });

    await _index2.default.Order.create({
      id: 1,
      userId: 1,
      mealId: 1,
      date: new Date().toDateString()
    });

    await _index2.default.Order.create({
      id: 2,
      userId: 2,
      mealId: 1,
      date: new Date().toDateString()
    });

    await _index2.default.Order.create({
      id: 3,
      userId: 1,
      mealId: 3,
      date: new Date().toDateString()
    });

    await _index2.default.Meal.create({
      id: 1,
      name: 'White Rice & Chicken',
      price: '30.00'
    });

    await _index2.default.Meal.create({
      id: 2,
      name: 'Jollof Rice & Chicken',
      price: '40.00'
    });

    await _index2.default.Meal.create({
      id: 3,
      name: 'Beans & Fried Plantain',
      price: '35.00'
    });

    await _index2.default.Meal.create({
      id: 4,
      name: 'Boiled Yam & Egg Sauce',
      price: '30.00'
    });

    await _index2.default.Meal.create({
      id: 5,
      name: 'Toasted Bread & Egg Sauce',
      price: '25.00'
    });

    await _index2.default.Meal.create({
      id: 6,
      name: 'Indomie Special',
      price: '20.00'
    });

    // await models.Meal.create({
    //   id: 7,
    //   name: 'Fufu & Vegetable Soup',
    //   price: '40.00',
    // });

    // await models.Meal.create({
    //   id: 8,
    //   name: 'Amala & Ewedu Soup',
    //   price: '40.00',
    // });

    // await models.Meal.create({
    //   id: 9,
    //   name: 'Eba & Egusi Soup',
    //   price: '40.00',
    // });

    // await models.Meal.create({
    //   id: 10,
    //   name: 'Yam Porridge',
    //   price: '30.00',
    // });

    // await models.Meal.create({
    //   id: 11,
    //   name: 'Fried Rice & Chicken',
    //   price: '35.00',
    // });

    // await models.Meal.create({
    //   id: 12,
    //   name: 'Catfish Peppersoup',
    //   price: '40.00',
    // });

    await _index2.default.Menu.create({
      id: 1,
      date: new Date().toDateString(),
      list: [1, 2, 3, 4, 5, 6]
    });

    // await models.Menu.create({
    //   id: 2,
    //   date: new Date().toDateString(),
    //   list: [5, 6, 7, 8],
    // });

    // await models.Menu.create({
    //   id: 3,
    //   date: new Date().toDateString(),
    //   list: [9, 10, 11, 12],
    // });
  }
}; // import User from './users';
exports.default = seeders;