'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controllers/users');

var _users2 = _interopRequireDefault(_users);

var _index = require('../auth/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // api/routes/users.js

router.post('/signup', _users2.default.signup);

router.post('/login', _users2.default.login);

router.get('/admin', _index2.default, _users2.default.admin);

// router.post('/manageUser', auth, UsersController.manageUser);


exports.default = router;