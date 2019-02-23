// import User from './users';
import models from './index';

// api/models/seeders.js

const seeders = {
  seedObj: async () => {
    await models.User.create({
      // id,
      name: 'obafemi',
      email: 'thevetdoctor@gmail.com',
    });
  },
};


export default seeders;
