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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use('/api/v1/meals', _meals2.default);
app.use('/api/v1/menus', _menus2.default);
app.use('/api/v1/orders', _orders2.default);

var meal = function meal(req, res) {
  res.end('<h1> Check out Book-A-Meal, and let\'s give you a sumptuous experience!</h1>\n  <h2> Check out Book-A-Meal, and let\'s give you a sumptuous experience!</h2>\n  <h3> Check out Book-A-Meal, and let\'s give you a sumptuous experience!</h3>\n  <h4> Check out Book-A-Meal, and let\'s give you a sumptuous experience!</h4>');
};

app.get('/meal', meal);

var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  // res.json({name: `Welcome to Book-A-Meal ...Your satisfaction is much assured!`});
  res.end('<h1> Welcome to Book-A-Meal </h1> <h3>...Your satisfaction is much assured! </h3>');
});

app.listen(port, function () {
  //  console.log(`Server started at port ${port} for Book-A-Meal App!`);
});

exports.default = app;