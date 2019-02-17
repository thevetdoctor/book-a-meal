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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import path from 'path';
/* eslint-disable no-console */
var app = (0, _express2.default)();

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
  // res.json({name: `Welcome to Book-A-Meal ...Your satisfaction is much assured!`});
  res.sendFile(__dirname.replace('server\\src', 'ui\\index.html'));
  // res.end(`<h1> Welcome to Book-A-Meal </h1> <h3>...where your satisfaction is much assured! </h3>
  //           Check out our array of delicacies, and let's give you a sumptuous experience!`);
});

app.listen(port, function () {
  console.log('Server started at port ' + port + ' for Book-A-Meal App!');
  console.log(__dirname.replace('server\\src', 'ui\\index.html'));
});

exports.default = app;