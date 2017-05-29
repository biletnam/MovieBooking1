'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var omdbCtrlStub = {
  index: 'omdbCtrl.index',
  show: 'omdbCtrl.show',
  create: 'omdbCtrl.create',
  update: 'omdbCtrl.update',
  destroy: 'omdbCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var omdbIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './omdb.controller': omdbCtrlStub
});

describe('Omdb API Router:', function() {

  it('should return an express router instance', function() {
    expect(omdbIndex).to.equal(routerStub);
  });

  describe('GET /api/omdbs', function() {

    it('should route to omdb.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'omdbCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/omdbs/:id', function() {

    it('should route to omdb.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'omdbCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/omdbs', function() {

    it('should route to omdb.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'omdbCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/omdbs/:id', function() {

    it('should route to omdb.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'omdbCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/omdbs/:id', function() {

    it('should route to omdb.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'omdbCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/omdbs/:id', function() {

    it('should route to omdb.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'omdbCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
