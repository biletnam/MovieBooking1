'use strict';

describe('Component: AddTheatorComponent', function () {

  // load the controller's module
  beforeEach(module('yomastertemplateApp'));

  var AddTheatorComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AddTheatorComponent = $componentController('addTheator', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
