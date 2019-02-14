'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

var meals = function meals(req, res) {
  res.end('<h1> Check out Book-A-Meal, and let\'s give you a sumptuous experience!</h1>\n  <h2> Check out Book-A-Meal, and let\'s give you a sumptuous experience!</h2>\n  <h3> Check out Book-A-Meal, and let\'s give you a sumptuous experience!</h3>\n  <h4> Check out Book-A-Meal, and let\'s give you a sumptuous experience!</h4>');
};

app.get('/meals', meals);

var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  // res.json({name: `Welcome to Book-A-Meal ...Your satisfaction is much assured!`});
  res.end('<h1> Welcome to Book-A-Meal </h1> <h3>...Your satisfaction is much assured! </h3>');
});

app.listen(port, function () {
  //  console.log('Server started at port ${port} for Book-A-Meal App!');
});

exports.default = app;