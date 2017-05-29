'use strict';

var app = require('../..');
import request from 'supertest';

var newAddtheator;

describe('Addtheator API:', function() {

  describe('GET /api/Addtheators', function() {
    var Addtheators;

    beforeEach(function(done) {
      request(app)
        .get('/api/Addtheators')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Addtheators = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(Addtheators).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/Addtheators', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/Addtheators')
        .send({
          name: 'New Addtheator',
          info: 'This is the brand new Addtheator!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAddtheator = res.body;
          done();
        });
    });

    it('should respond with the newly created Addtheator', function() {
      expect(newAddtheator.name).to.equal('New Addtheator');
      expect(newAddtheator.info).to.equal('This is the brand new Addtheator!!!');
    });

  });

  describe('GET /api/Addtheators/:id', function() {
    var Addtheator;

    beforeEach(function(done) {
      request(app)
        .get('/api/Addtheators/' + newAddtheator._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Addtheator = res.body;
          done();
        });
    });

    afterEach(function() {
      Addtheator = {};
    });

    it('should respond with the requested Addtheator', function() {
      expect(Addtheator.name).to.equal('New Addtheator');
      expect(Addtheator.info).to.equal('This is the brand new Addtheator!!!');
    });

  });

  describe('PUT /api/Addtheators/:id', function() {
    var updatedAddtheator;

    beforeEach(function(done) {
      request(app)
        .put('/api/Addtheators/' + newAddtheator._id)
        .send({
          name: 'Updated Addtheator',
          info: 'This is the updated Addtheator!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAddtheator = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAddtheator = {};
    });

    it('should respond with the updated Addtheator', function() {
      expect(updatedAddtheator.name).to.equal('Updated Addtheator');
      expect(updatedAddtheator.info).to.equal('This is the updated Addtheator!!!');
    });

  });

  describe('DELETE /api/Addtheators/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/Addtheators/' + newAddtheator._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when Addtheator does not exist', function(done) {
      request(app)
        .delete('/api/Addtheators/' + newAddtheator._id)
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
