'use strict';

(function(){

class GenerateticketComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.$scope=$scope;
    this.socket=socket;
    this.poster='';


    $(document).ready(function () {

      var moviePoster=sessionStorage.getItem('poster');
      $('#genimage').attr('src', moviePoster);

        var Title=sessionStorage.getItem('Title');
        var Language=sessionStorage.getItem('Language');
        var location= sessionStorage.getItem("Location");
        var classes = sessionStorage.getItem("Class");
        var ticket = sessionStorage.getItem("TicketNo");
        var seat=sessionStorage.getItem('seatNO');
        var time=sessionStorage.getItem('time');
        var date= sessionStorage.getItem('date');
        var internet=sessionStorage.getItem('internet');
        var total=sessionStorage.getItem('total');
        var subtotal=sessionStorage.getItem('subtotal');


          $('#genTitle').html(Title);
          $('#language').html(Language);
          $('#genlocation').html(location);
          $('#genTypeclass').html(classes);
          $('#genTicketNo').html(ticket);
          $('#genseat').html(seat);
          $('#dateandtime').html(date);

          $('#gentime').html(time);
          $('#gensubtotal').html(subtotal);
          $('#gentotal').html(total);
          $('#geninternet').html(internet);




    });

    // script end


  }




}

angular.module('yomastertemplateApp')
  .component('generateticket', {
    templateUrl: 'app/generateticket/generateticket.html',
    controller: GenerateticketComponent,
    controllerAs: 'generateticketCtrl'
  });

})();
