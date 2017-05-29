'use strict';

angular.module('yomastertemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/generateticket', {
        template: '<generateticket></generateticket>'
      });
  });
