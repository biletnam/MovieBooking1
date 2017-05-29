'use strict';

angular.module('yomastertemplateApp.auth', ['yomastertemplateApp.constants',
    'yomastertemplateApp.util', 'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
