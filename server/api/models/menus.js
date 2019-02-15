// api/models/menus.js

import mealsRecord from './meals';

const menusRecord = [
  {
    id: 1,
    date: new Date().toDateString(),
    list: mealsRecord.filter(meal => meal.id <= 4),
  }, {
    id: 2,
    date: new Date().toDateString(),
    list: mealsRecord.filter(meal => meal.id <= 8 && meal.id > 4),
  }, {
    id: 3,
    date: new Date().toDateString(),
    list: mealsRecord.filter(meal => meal.id <= 12 && meal.id > 8),
  },
];


export default menusRecord;
