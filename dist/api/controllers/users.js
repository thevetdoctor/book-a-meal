'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

var _index = require('../auth/index');

var _index2 = _interopRequireDefault(_index);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// api/controllers/users.js

var validUser = function validUser(user) {
  var validEmail = /(.+)@(.+){2,}\.(.+){2,}/.test(user.email) && user.email.trim() !== '';

  var validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length >= 6;

  return validEmail && validPassword;
};

var UsersController = {
  signup: function signup(req, res, next) {
    var user = new _users2.default(null, req.body.name, req.body.email, req.body.password);

    // check validity of user name & password
    if (validUser(req.body)) {
      _models2.default.User.findAll().then(function (response) {
        var userIds = response.map(function (value) {
          return value.id;
        });
        var userNames = response.map(function (value) {
          return value.name;
        });
        var lastUserId = Math.max.apply(Math, _toConsumableArray(userIds));
        if (userNames.includes(user.name)) {
          res.status(400).json({
            status: 400,
            error: 'Email already used'
          });
        } else {
          user.id = lastUserId + 1;
          // save user in User table in DB
          _models2.default.User.create(user).then(function (result) {
            res.status(200).json({
              status: 200,
              message: 'New User created',
              result: result
            });
          });
        }
      });
    } else {
      // send an error
      res.status(401).json({
        message: 'Signup Failed',
        error: 'Signup Failed',
        reasons: 'Invalid Email/Password must be minimum of 6 characters'
      });
    }
  },

  login: function login(req, res, next) {
    var user = { email: req.body.email, password: req.body.password };

    if (user.email !== '' && user.password !== '') {
      _models2.default.User.findAll().then(function (response) {
        var userEmails = response.map(function (value) {
          return value.email;
        });
        var userIndex = userEmails.indexOf(user.email);
        console.log(userEmails);
        console.log(userIndex);
        var newUser = response[userIndex];
        console.log(newUser);
        if (newUser.email === user.email) {
          if (newUser.password === user.password) {
            _jsonwebtoken2.default.sign({ user: user }, 'secretKey', { expiresIn: '1min' }, function (err, token) {
              if (err) {
                res.status(400).json({
                  status: 400,
                  error: 'Authorization failed'
                });
              }
              res.status(200).json({
                status: 200,
                newUser: newUser,
                message: 'Login successful',
                token: token
              });
            });
            /* end of jwt signing */
          } else {
            res.status(400).json({
              status: 400,
              error: 'Invalid password'
            });
          }
        } else {
          res.status(400).json({
            status: 400,
            error: 'Invalid email'
          });
        }
      });
    } else {
      res.status(400).json({
        status: 400,
        error: 'Please enter your email & password'
      });
    }
  },

  admin: function admin(req, res, next) {
    // const userList = usersRecord.map(user => user);

    _jsonwebtoken2.default.verify(req.token, 'secretKey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        res.status(200).json({
          status: 200,
          message: 'Registered users displayed'
          // list: userList,
        });
      }
    });
  }
};

exports.default = UsersController;