// import User from './users';
import models from './index';

// api/models/seeders.js

const seeders = {
  seedObj: async () => {
    await models.User.create({
      id: 1,
      name: 'obafemi',
      email: 'thevetdoctor@gmail.com',
      password: '123456',
      isAdmin: true,
    });

    await models.User.create({
      id: 2,
      name: 'demilade',
      email: 'demilade@gmail.com',
      password: 'demilade',
      isAdmin: false,
    });

    await models.Order.create({
      id: 1,
      userId: 1,
      mealId: 1,
      date: new Date(),
    });
    await models.Meal.create({
      id: 1,
      name: 'White Rice & Chicken',
      price: '30.00',
    });

    await models.Meal.create({
      id: 2,
      name: 'Jollof Rice & Chicken',
      price: '40.00',
    });

    await models.Meal.create({
      id: 3,
      name: 'Beans & Fried Plantain',
      price: '35.00',
    });

    await models.Meal.create({
      id: 4,
      name: 'Boiled Yam & Egg Sauce',
      price: '30.00',
    });

    await models.Meal.create({
      id: 5,
      name: 'Toasted Bread & Egg Sauce',
      price: '25.00',
    });

    await models.Meal.create({
      id: 6,
      name: 'Indomie Special',
      price: '20.00',
    });

    await models.Meal.create({
      id: 7,
      name: 'Fufu & Vegetable Soup',
      price: '40.00',
    });

    await models.Meal.create({
      id: 8,
      name: 'Amala & Ewedu Soup',
      price: '40.00',
    });

    await models.Meal.create({
      id: 9,
      name: 'Eba & Egusi Soup',
      price: '40.00',
    });

    await models.Meal.create({
      id: 10,
      name: 'Yam Porridge',
      price: '30.00',
    });

    await models.Meal.create({
      id: 11,
      name: 'Fried Rice & Chicken',
      price: '35.00',
    });

    await models.Meal.create({
      id: 12,
      name: 'Catfish Peppersoup',
      price: '40.00',
    });
  },
};


export default seeders;
