'use strict';

describe('Component: GenerateticketComponent', function () {

  // load the controller's module
  beforeEach(module('yomastertemplateApp'));

  var GenerateticketComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    GenerateticketComponent = $componentController('generateticket', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
