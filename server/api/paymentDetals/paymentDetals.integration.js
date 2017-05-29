'use strict';

var app = require('../..');
import request from 'supertest';

var newPaymentDetals;

describe('PaymentDetals API:', function() {

  describe('GET /api/paymentDetalss', function() {
    var paymentDetalss;

    beforeEach(function(done) {
      request(app)
        .get('/api/paymentDetalss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          paymentDetalss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(paymentDetalss).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/paymentDetalss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/paymentDetalss')
        .send({
          name: 'New PaymentDetals',
          info: 'This is the brand new paymentDetals!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPaymentDetals = res.body;
          done();
        });
    });

    it('should respond with the newly created paymentDetals', function() {
      expect(newPaymentDetals.name).to.equal('New PaymentDetals');
      expect(newPaymentDetals.info).to.equal('This is the brand new paymentDetals!!!');
    });

  });

  describe('GET /api/paymentDetalss/:id', function() {
    var paymentDetals;

    beforeEach(function(done) {
      request(app)
        .get('/api/paymentDetalss/' + newPaymentDetals._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          paymentDetals = res.body;
          done();
        });
    });

    afterEach(function() {
      paymentDetals = {};
    });

    it('should respond with the requested paymentDetals', function() {
      expect(paymentDetals.name).to.equal('New PaymentDetals');
      expect(paymentDetals.info).to.equal('This is the brand new paymentDetals!!!');
    });

  });

  describe('PUT /api/paymentDetalss/:id', function() {
    var updatedPaymentDetals;

    beforeEach(function(done) {
      request(app)
        .put('/api/paymentDetalss/' + newPaymentDetals._id)
        .send({
          name: 'Updated PaymentDetals',
          info: 'This is the updated paymentDetals!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPaymentDetals = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPaymentDetals = {};
    });

    it('should respond with the updated paymentDetals', function() {
      expect(updatedPaymentDetals.name).to.equal('Updated PaymentDetals');
      expect(updatedPaymentDetals.info).to.equal('This is the updated paymentDetals!!!');
    });

  });

  describe('DELETE /api/paymentDetalss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/paymentDetalss/' + newPaymentDetals._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when paymentDetals does not exist', function(done) {
      request(app)
        .delete('/api/paymentDetalss/' + newPaymentDetals._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
