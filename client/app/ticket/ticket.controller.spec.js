'use strict';

describe('Component: TicketComponent', function () {

  // load the controller's module
  beforeEach(module('yomastertemplateApp'));

  var TicketComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TicketComponent = $componentController('ticket', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
