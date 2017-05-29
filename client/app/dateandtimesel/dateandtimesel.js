'use strict';

angular.module('yomastertemplateApp')
  .config(function ($routeProvider) {
     var x=sessionStorage.getItem('TicketNo');
     var y=sessionStorage.getItem('Class');
    if(x===null || y===null){
      $routeProvider.when('/', {
          template:  '<main></main>'
        });
    }
    else{
    $routeProvider.when('/dateandtimesel', {
        template: '<dateandtimesel></dateandtimesel>'
      });
    }
  });
