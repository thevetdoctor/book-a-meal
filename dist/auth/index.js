'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable dot-notation */
/* eslint-disable no-console */
// api/auth/index.js


var auth = function auth(req, res, next) {
  console.log(req.headers.authorization);
  var bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(' ');
    var bearerToken = bearer[1];
    req.token = bearerToken;

    next();
  } else {
    res.status(403).json({
      message: 'Authentication failed'
    });
  }
};

exports.default = auth;