'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

var _orders = require('../api/controllers/orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);

describe('OrdersController', function () {
  it('should exist', function () {
    _orders2.default.should.exist;
  });
  describe('makeOrder POST method', function () {
    it('should exist', function () {
      _orders2.default.makeOrder.should.exist;
    });
  });
  describe('Select a meal option(order)', function () {
    it('POST /api/v1/orders', function (done) {
      _chai2.default.request(_server2.default).post('/api/v1/orders').send({
        userId: 2,
        mealId: 1
      }).end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.status.should.equal(200);
        res.body.should.have.property('data');
        res.body.data.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.be.a('string');
      });
      done();
    });
  });

  describe('getOrders GET method', function () {
    it('should exist', function () {
      _orders2.default.getOrders.should.exist;
    });
  });
  describe('get all Orders', function () {
    it('GET /api/v1/orders', function (done) {
      _chai2.default.request(_server2.default).get('/api/v1/orders').end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('status');
        res.body.status.should.equal(200);
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.should.have.property('message');
        res.body.message.should.be.a('string');
      });
      done();
    });
  });

  describe('modifyOrder PUT method', function () {
    it('should exist', function () {
      _orders2.default.modifyOrder.should.exist;
    });
  });
  describe('modify an order', function () {
    it('PUT /api/v1/orders/:1', function (done) {
      _chai2.default.request(_server2.default).put('/api/v1/orders/1').send({
        mealId: 2
      }).end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('status');
        res.body.status.should.equal(200);
        res.body.should.have.property('data');
        // res.body.data.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.be.a('string');
      });
      done();
    });
  });
});