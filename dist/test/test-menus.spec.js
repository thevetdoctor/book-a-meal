'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

var _menus = require('../api/controllers/menus');

var _menus2 = _interopRequireDefault(_menus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);

describe('MenusController', function () {
  it('should exist', function () {
    _menus2.default.should.exist;
  });
  describe('addMenu POST method', function () {
    it('should exist', function () {
      _menus2.default.addMenu.should.exist;
    });
  });
  describe('Set up a Menu List', function () {
    it('POST /api/v1/menus', function (done) {
      _chai2.default.request(_server2.default).post('/api/v1/menus').send({
        list: []
      }).end(function (err, res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.status.should.equal(201);
        res.body.should.have.property('data');
        res.body.data.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.be.a('string');
      });
      done();
    });
  });
  describe('getMenu GET method', function () {
    it('should exist', function () {
      _menus2.default.getMenu.should.exist;
    });
  });
  describe('get the MENU for a specific day', function () {
    it('GET /api/v1/menus', function (done) {
      _chai2.default.request(_server2.default).get('/api/v1/menus/').end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('status');
        res.body.status.should.equal(200);
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.data.should.have.property('list');
        res.body.data.list.should.be.a('array');
        res.body.should.have.property('message');
        res.body.message.should.be.a('string');
      });
      done();
    });
  });
});