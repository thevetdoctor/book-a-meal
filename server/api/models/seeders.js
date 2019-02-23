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
  },
};


export default seeders;
