// api/controllers.menu.js

import mealsRecord from '../models/meals';
import menusRecord from '../models/menus';

const menusController = {
  addMenu: (req, res) => {
    const menu = {
      id: menusRecord.length,
      date: new Date(),
      list: [],
    };

    if (menu.date !== new Date()) {
      const newMenuList = mealsRecord.map(meal => meal.id % 2 === 0);

      menu.list = newMenuList;

      res.status(200).json({
        status: 200,
        message: `Menu setup for ${menu.date}`,
      });
    } else {
      res.status(404).json({
        error: 'Menu already exist',
      });
    }
  },
};


export default menusController;
