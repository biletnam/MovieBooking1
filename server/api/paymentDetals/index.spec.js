'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var paymentDetalsCtrlStub = {
  index: 'paymentDetalsCtrl.index',
  show: 'paymentDetalsCtrl.show',
  create: 'paymentDetalsCtrl.create',
  update: 'paymentDetalsCtrl.update',
  destroy: 'paymentDetalsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var paymentDetalsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './paymentDetals.controller': paymentDetalsCtrlStub
});

describe('PaymentDetals API Router:', function() {

  it('should return an express router instance', function() {
    expect(paymentDetalsIndex).to.equal(routerStub);
  });

  describe('GET /api/paymentDetalss', function() {

    it('should route to paymentDetals.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'paymentDetalsCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/paymentDetalss/:id', function() {

    it('should route to paymentDetals.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'paymentDetalsCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/paymentDetalss', function() {

    it('should route to paymentDetals.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'paymentDetalsCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/paymentDetalss/:id', function() {

    it('should route to paymentDetals.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'paymentDetalsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/paymentDetalss/:id', function() {

    it('should route to paymentDetals.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'paymentDetalsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/paymentDetalss/:id', function() {

    it('should route to paymentDetals.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'paymentDetalsCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
