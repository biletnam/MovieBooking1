'use strict';

angular.module('yomastertemplateApp', ['yomastertemplateApp.auth', 'yomastertemplateApp.admin',
    'yomastertemplateApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
    'btford.socket-io', 'validation.match','ngPlacesAutocomplete','ui.filters','720kb.datepicker','ngRateIt'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
