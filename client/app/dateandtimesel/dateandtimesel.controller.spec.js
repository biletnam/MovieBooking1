'use strict';

describe('Component: DateandtimeselComponent', function () {

  // load the controller's module
  beforeEach(module('yomastertemplateApp'));

  var DateandtimeselComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    DateandtimeselComponent = $componentController('dateandtimesel', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
