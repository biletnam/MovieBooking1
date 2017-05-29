'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var AddtheatorCtrlStub = {
  index: 'AddtheatorCtrl.index',
  show: 'AddtheatorCtrl.show',
  create: 'AddtheatorCtrl.create',
  update: 'AddtheatorCtrl.update',
  destroy: 'AddtheatorCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var AddtheatorIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './Addtheator.controller': AddtheatorCtrlStub
});

describe('Addtheator API Router:', function() {

  it('should return an express router instance', function() {
    expect(AddtheatorIndex).to.equal(routerStub);
  });

  describe('GET /api/Addtheators', function() {

    it('should route to Addtheator.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'AddtheatorCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/Addtheators/:id', function() {

    it('should route to Addtheator.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'AddtheatorCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/Addtheators', function() {

    it('should route to Addtheator.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'AddtheatorCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/Addtheators/:id', function() {

    it('should route to Addtheator.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'AddtheatorCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/Addtheators/:id', function() {

    it('should route to Addtheator.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'AddtheatorCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/Addtheators/:id', function() {

    it('should route to Addtheator.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'AddtheatorCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
