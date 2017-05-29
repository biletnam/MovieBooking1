'use strict';

(function(){

class RatingComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yomastertemplateApp')
  .component('rating', {
    templateUrl: 'app/rating/rating.html',
    controller: RatingComponent,
    controllerAs: 'ratingCtrl'
  });

})();
