// api/controllers.menu.js

import models from '../models';

const menusController = {
  addMenu: (req, res) => {
    const menu = {
      id: null,
      date: new Date().toDateString(),
      list: [],
    };

    models.Menu.findAll({ where: { date: new Date().toDateString() } })
      .then((menus) => {
        const menuIds = menus.map(x => x.id);
        const menuDates = menus.map(y => y.date);
        const lastId = Math.max(...menuIds);
        if (!menuDates.includes(menu.date)) {
          menu.id = lastId + 1;
          models.Menu.create(menu)
            .then((result) => {
              res.status(200).json({
                status: 200,
                data: result,
                message: 'New Menu created',
              });
            });
        } else {
          res.status(400).json({
            status: 400,
            error: 'Menu already exist',
          });
        }
      });
  },


  getMenu: (req, res) => {
    models.Menu.findAll({ where: { date: new Date().toDateString() } })
      .then((menus) => {
        if (menus.length > 0) {
          res.status(200).json({
            status: 200,
            data: menus,
            message: 'Menu displayed',
          });
        } else {
          res.status(400).json({
            status: 400,
            error: 'Menu not available',
          });
        }
      });
  },
};


export default menusController;
