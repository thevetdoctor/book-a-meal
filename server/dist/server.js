'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _meals = require('../api/routes/meals');

var _meals2 = _interopRequireDefault(_meals);

var _menus = require('../api/routes/menus');

var _menus2 = _interopRequireDefault(_menus);

var _orders = require('../api/routes/orders');

var _orders2 = _interopRequireDefault(_orders);

var _users = require('../api/routes/users');

var _users2 = _interopRequireDefault(_users);

var _models = require('../api/models');

var _seeders = require('../api/models/seeders');

var _seeders2 = _interopRequireDefault(_seeders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import path from 'path';
/* eslint-disable no-console */
var app = (0, _express2.default)();
var eraseDatabaseOnSync = true;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '/ui')));
app.use(_express2.default.static(__dirname.replace('server\\src', 'ui')));

app.use('/api/v1/meals', _meals2.default);
app.use('/api/v1/menus', _menus2.default);
app.use('/api/v1/orders', _orders2.default);
app.use('/auth/users/', _users2.default);

var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.sendFile(__dirname.replace('server\\src', 'ui\\index.html'));
});

_models.sequelize.sync({ force: eraseDatabaseOnSync }).then(async function () {
  // if (eraseDatabaseOnSync) {
  console.log('seeding DB');
  console.log(_seeders2.default);
  // eslint-disable-next-line no-unused-expressions
  _seeders2.default.seedObj();
  // }

  app.listen(port, function () {
    console.log('Server started at port ' + port + ' for Book-A-Meal App!');
    console.log(__dirname.replace('server\\src', 'ui\\index.html'));
  });
});

exports.default = app;