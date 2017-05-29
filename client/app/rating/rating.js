'use strict';

angular.module('yomastertemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rating', {
        template: '<rating></rating>'
      });
  });
