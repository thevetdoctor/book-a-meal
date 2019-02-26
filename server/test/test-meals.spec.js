/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import meals from '../api/controllers/meals';

const should = chai.should();

chai.use(chaiHttp);

describe('MealsController', () => {
  it('should exist', () => {
    meals.should.exist;
  });

  describe('addMeal POST method', () => {
    it('should exist', () => {
      meals.addMeal.should.exist;
    });
  });
  describe('Add a meal to Meal List', () => {
    it('POST /api/v1/meals', (done) => {
      chai.request(server)
        .post('/api/v1/meals')
        .send({
          name: 'Semolina',
          price: '30.00',
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
          res.body.data.should.have.property('id');
          res.body.data.should.have.property('name');
          res.body.data.should.have.property('price');
        });
      done();
    });
  });

  describe('modifyMeal PUT method', () => {
    it('should exist', () => {
      meals.modifyMeal.should.exist;
    });
  });
  describe('modify a meal in Meal List', () => {
    it('PUT /api/v1/meals/:id', (done) => {
      chai.request(server)
        .put('/api/v1/meals/1')
        .send({
          name: 'Jollof Rice & Chicken',
          price: '30.00',
        })
        .end((err, res) => {
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

  describe('deleteMeal DELETE method', () => {
    it('should exist', () => {
      meals.deleteMeal.should.exist;
    });
  });
  describe('delete a meal off the Meal List', () => {
    it('DELETE /api/v1/meals/1', (done) => {
      chai.request(server)
        .delete('/api/v1/meals/1')
        .end((err, res) => {
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

  describe('getAllMeals GET method', () => {
    it('should exist', () => {
      meals.getAllMeals.should.exist;
    });
  });
  describe('display all meals in the Meal List', () => {
    it('GET /api/v1/meals/', (done) => {
      chai.request(server)
        .get('/api/v1/meals')
        .end((err, res) => {
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
