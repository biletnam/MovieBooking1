'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var mapCtrlStub = {
  index: 'mapCtrl.index',
  show: 'mapCtrl.show',
  create: 'mapCtrl.create',
  update: 'mapCtrl.update',
  destroy: 'mapCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var mapIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './map.controller': mapCtrlStub
});

describe('Map API Router:', function() {

  it('should return an express router instance', function() {
    expect(mapIndex).to.equal(routerStub);
  });

  describe('GET /api/maps', function() {

    it('should route to map.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'mapCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/maps/:id', function() {

    it('should route to map.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'mapCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/maps', function() {

    it('should route to map.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'mapCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/maps/:id', function() {

    it('should route to map.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'mapCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/maps/:id', function() {

    it('should route to map.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'mapCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/maps/:id', function() {

    it('should route to map.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'mapCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
