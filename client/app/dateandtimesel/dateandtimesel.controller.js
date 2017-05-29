'use strict';

(function(){

class DateandtimeselComponent {
  constructor($http,socket,$scope) {
    this.message = 'Hello';
    this.$http= $http;
    this.$scope=$scope;
    this.socket=socket;
    this.mapdata=[];

  //  script
   $(document).ready(function () {


$("#test").attr("disabled", "disabled").off('click');

   });

  // script

  }

 $onInit(){

   var Title= sessionStorage.getItem('Title');
   var Location= sessionStorage.getItem('Location');

  this.$http.get('/api/maps/datetime/' + Title + '/' + Location).then(response=>{
    this.mapdata=response.data;
    console.log(this.mapdata);

  });
   }

  times(y,x){

     sessionStorage.setItem('time',y.time);
       sessionStorage.setItem('theatre',x.theatreName);

            if (this.dynamic===undefined){
              alert("Select Date First");
            }
  }

  dates(x){

    sessionStorage.setItem('date',x.date);
    if(x.date!==undefined){
      this.dynamic='ticket';
    }


  }




}

angular.module('yomastertemplateApp')
  .component('dateandtimesel', {
    templateUrl: 'app/dateandtimesel/dateandtimesel.html',
    controller: DateandtimeselComponent,
    controllerAs: 'dateandtimeselCtrl'
  });

})();
