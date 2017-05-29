'use strict';

(function(){

class PaymentComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';


$(document).ready(function () {

    var Title=sessionStorage.getItem('Title');
    var Language=sessionStorage.getItem('Language');
    var location= sessionStorage.getItem("Location");
    var classes = sessionStorage.getItem("Class");
    var ticket=sessionStorage.getItem('ticketIdd');
  
    var seat=sessionStorage.getItem('seatNO');
    var time=sessionStorage.getItem('time');
    var date= sessionStorage.getItem('date');
    var internet=sessionStorage.getItem('internet');
    var total=sessionStorage.getItem('total');
    var subtotal=sessionStorage.getItem('subtotal');


      $('#title').html(Title);
      $('#language').html(Language);
      $('#location').html(location);
      $('#Typeclass').html(classes);
      $('#TicketNo').html(ticket);
      $('#seat').html(seat);
      $('#date').html(date);
      $('#time').html(time);
      $('#subtotal').html(subtotal);
      $('#total').html(total);
      $('#internet').html(internet);




});

// script end

  }
}

angular.module('yomastertemplateApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });

})();
