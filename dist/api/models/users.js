"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// api/models/users.js

var User =
// eslint-disable-next-line no-unused-vars
function User(id, name, email, password) {
  _classCallCheck(this, User);

  this.id = id;
  this.name = name;
  this.email = email;
  this.password = password;
  this.isAdmin = false;
}

// orders: []
;

exports.default = User;