/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server';
import menus from '../api/controllers/menus';

const should = chai.should();

chai.use(chaiHttp);

describe('MenusController', () => {
  it('should exist', () => {
    menus.should.exist;
  });
  describe('addMenu POST method', () => {
    it('should exist', () => {
      menus.addMenu.should.exist;
    });
  });
  describe('Set up a Menu List', () => {
    it('POST /api/v1/menus', (done) => {
      chai.request(server)
        .post('/api/v1/menus')
        .send({
          list: [],
        })
        .end((err, res) => {
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
  describe('getMenu GET method', () => {
    it('should exist', () => {
      menus.getMenu.should.exist;
    });
  });
  describe('get the MENU for a specific day', () => {
    it('GET /api/v1/menus', (done) => {
      chai.request(server)
        .get('/api/v1/menus/')
        .end((err, res) => {
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
