// api/controllers.menu.js

import mealsRecord from '../models/meals';
import menusRecord from '../models/menus';

const menusController = {
  addMenu: (req, res) => {
    const menu = {
      id: menusRecord.length,
      date: new Date().toDateString(),
      list: [],
    };

    if (menu.date === new Date().toDateString()) {
      const newMenuList = mealsRecord.filter(meal => meal.id % 2 === 0);

      menu.list = newMenuList;
      menusRecord.push(menu);

      res.status(201).json({
        status: 201,
        data: menu,
        message: `Menu setup for ${menu.date}`,
      });
    } else {
      res.status(404).json({
        error: 'Menu already exist',
      });
    }
  },

  getMenu: (req, res) => {
    const date = new Date().toDateString();

    const menuDate = menu => menu.date === date;

    const foundMenu = menusRecord.find(menuDate);

    if (foundMenu) {
      res.status(200).json({
        status: 200,
        data: foundMenu,
        message: 'Menu displayed',
      });
    } else {
      res.status(404).json({
        error: 'Menu not available',
      });
    }
  },
};


export default menusController;
