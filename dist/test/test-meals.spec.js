'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

var _meals = require('../api/controllers/meals');

var _meals2 = _interopRequireDefault(_meals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);

describe('MealsController', function () {
  it('should exist', function () {
    _meals2.default.should.exist;
  });

  describe('addMeal POST method', function () {
    it('should exist', function () {
      _meals2.default.addMeal.should.exist;
    });
  });
  describe('Add a meal to Meal List', function () {
    it('POST /api/v1/meals', function (done) {
      _chai2.default.request(_server2.default).post('/api/v1/meals').send({
        name: 'Semolina',
        price: '30.00'
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
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('price');
      });
      done();
    });
  });

  describe('modifyMeal PUT method', function () {
    it('should exist', function () {
      _meals2.default.modifyMeal.should.exist;
    });
  });
  describe('modify a meal in Meal List', function () {
    it('PUT /api/v1/meals/:id', function (done) {
      _chai2.default.request(_server2.default).put('/api/v1/meals/1').send({
        name: 'Jollof Rice & Chicken',
        price: '30.00'
      }).end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('status');
        res.body.status.should.equal(200);
        res.body.should.have.property('data');
        // res.body.data.should.be.a('object');
        // res.body.should.have.property('message');
        // res.body.message.should.be.a('string');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('price');
      });
      done();
    });
  });

  describe('deleteMeal DELETE method', function () {
    it('should exist', function () {
      _meals2.default.deleteMeal.should.exist;
    });
  });
  describe('delete a meal off the Meal List', function () {
    it('DELETE /api/v1/meals/1', function (done) {
      _chai2.default.request(_server2.default).delete('/api/v1/meals/1').end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('status');
        res.body.status.should.equal(200);
        res.body.should.have.property('message');
        res.body.message.should.be.a('string');
      });
      done();
    });
  });

  describe('getAllMeals GET method', function () {
    it('should exist', function () {
      _meals2.default.getAllMeals.should.exist;
    });
  });
  describe('display all meals in the Meal List', function () {
    it('GET /api/v1/meals/', function (done) {
      _chai2.default.request(_server2.default).get('/api/v1/meals').end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('status');
        res.body.status.should.equal(200);
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.should.have.property('message');
        res.body.message.should.be.a('string');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('name');
        res.body.data[0].should.have.property('price');
      });
      done();
    });
  });
});