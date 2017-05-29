'use strict';

var app = require('../..');
import request from 'supertest';

var newOmdb;

describe('Omdb API:', function() {

  describe('GET /api/omdbs', function() {
    var omdbs;

    beforeEach(function(done) {
      request(app)
        .get('/api/omdbs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          omdbs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(omdbs).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/omdbs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/omdbs')
        .send({
          name: 'New Omdb',
          info: 'This is the brand new omdb!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOmdb = res.body;
          done();
        });
    });

    it('should respond with the newly created omdb', function() {
      expect(newOmdb.name).to.equal('New Omdb');
      expect(newOmdb.info).to.equal('This is the brand new omdb!!!');
    });

  });

  describe('GET /api/omdbs/:id', function() {
    var omdb;

    beforeEach(function(done) {
      request(app)
        .get('/api/omdbs/' + newOmdb._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          omdb = res.body;
          done();
        });
    });

    afterEach(function() {
      omdb = {};
    });

    it('should respond with the requested omdb', function() {
      expect(omdb.name).to.equal('New Omdb');
      expect(omdb.info).to.equal('This is the brand new omdb!!!');
    });

  });

  describe('PUT /api/omdbs/:id', function() {
    var updatedOmdb;

    beforeEach(function(done) {
      request(app)
        .put('/api/omdbs/' + newOmdb._id)
        .send({
          name: 'Updated Omdb',
          info: 'This is the updated omdb!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedOmdb = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOmdb = {};
    });

    it('should respond with the updated omdb', function() {
      expect(updatedOmdb.name).to.equal('Updated Omdb');
      expect(updatedOmdb.info).to.equal('This is the updated omdb!!!');
    });

  });

  describe('DELETE /api/omdbs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/omdbs/' + newOmdb._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when omdb does not exist', function(done) {
      request(app)
        .delete('/api/omdbs/' + newOmdb._id)
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
