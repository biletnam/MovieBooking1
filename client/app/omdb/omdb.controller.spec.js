'use strict';

describe('Component: OmdbComponent', function () {

  // load the controller's module
  beforeEach(module('yomastertemplateApp'));

  var OmdbComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    OmdbComponent = $componentController('omdb', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
