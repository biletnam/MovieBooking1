'use strict';

angular.module('yomastertemplateApp')
  .config(function ($routeProvider) {

 
   $routeProvider.when('/ticket', {
       template: '<ticket></ticket>'
     });

  });
