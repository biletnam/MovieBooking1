'use strict';

angular.module('yomastertemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addTheator', {
        template: '<add-theator></add-theator>',
        authenticate: 'admin'

      });

  });
