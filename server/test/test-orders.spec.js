/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server';
import orders from '../api/controllers/orders';

const should = chai.should();

chai.use(chaiHttp);

describe('OrdersController', () => {
  it('should exist', () => {
    orders.should.exist;
  });
  describe('makeOrder POST method', () => {
    it('should exist', () => {
      orders.makeOrder.should.exist;
    });
  });
  describe('Select a meal option(order)', () => {
    it('POST /api/v1/orders', (done) => {
      chai.request(server)
        .post('/api/v1/orders')
        .send({
          userId: 2,
          mealId: 1,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.status.should.equal(200);
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.be.a('string');
          done();
        });
    });
  });

  describe('getOrders GET method', () => {
    it('should exist', () => {
      orders.getOrders.should.exist;
    });
  });
  describe('get all Orders', () => {
    it('GET /api/v1/orders', (done) => {
      chai.request(server)
        .get('/api/v1/orders')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('status');
          res.body.status.should.equal(200);
          res.body.should.have.property('data');
          res.body.data.should.be.a('array');
          res.body.should.have.property('message');
          res.body.message.should.be.a('string');
          done();
        });
    });
  });

  describe('modifyOrder PUT method', () => {
    it('should exist', () => {
      orders.modifyOrder.should.exist;
    });
  });
  describe('modify an order', () => {
    it('PUT /api/v1/orders/:1', (done) => {
      chai.request(server)
        .put('/api/v1/orders/1')
        .send({
          mealId: 2,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('status');
          res.body.status.should.equal(200);
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.be.a('string');
          done();
        });
    });
  });
});
