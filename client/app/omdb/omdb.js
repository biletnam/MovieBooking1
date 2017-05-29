'use strict';

angular.module('yomastertemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addmovie', {
        template: '<omdb></omdb>',
        authenticate:'admin'
      });
  });
