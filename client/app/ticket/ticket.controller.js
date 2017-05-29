'use strict';

(function(){

class TicketComponent {

  constructor($http,$scope,socket,$window) {
    this.message = 'Hello';
    this.$http=$http;
    this.$scope=$scope;
    this.socket=socket;
    this.$window=$window;





    // script

    $(document).ready(function() {

     var ticketNo2;
     var tik;




      // $("#A1").prop('disabled','disabled');


      // var scope = angular.element("#opt");
      // console.log(scope);
    //   var g= $("ticno").html();
    // window.alert(g);


      var Class= sessionStorage.getItem("Class");
      $('#class').html(Class);
      var ticketNo=sessionStorage.getItem("TicketNo");

      $('#opt ').val(ticketNo);

       if(Class==='GOLD'){

         $('.g').addClass('grayy');
       }
       else{
         $('.s').addClass('grayy');
       }

      // window.alert(ticketNo);
        var counter=0;
        var add;
         var seatArray=[];


          function ticket(){

             $('.tselect').click(function() {

              var id =  $(this).attr('id');
              var hash={};




             var grey= $('#' + id).hasClass('grayy');
              var classSel= $('#'+ id).hasClass('colr');
              if(!grey && !classSel && counter<ticketNo2){
              console.log(id);
              $('#' + id).addClass('colr');

              // $('#seatNO').append(id);

              hash[id]='on';


              if(hash[id]=='on')
              {

                 seatArray.push(id);



                  //  window.alert(seatArray);

              }

                      add=counter++;

                      console.log(counter);
              }

              else if(classSel) {

                  hash[id]='off';
                  if(hash[id]=='off')
                  {
                     seatArray.splice(seatArray.indexOf(id),1);
                    //  window.alert(seatArray);
                  }


                $('#' + id).removeClass('colr');



                add=counter--;
                 console.log(counter);

              }
               $('#seatNO').html(seatArray +',');
              console.log(seatArray);



              var seat=$('#seatNO').html();
              console.log(seat);

              sessionStorage.setItem('seatNO',seat);
              sessionStorage.setItem('NoSelectedTicket',counter);

              $('#seatSelected').html(counter);



                    // for seat no


                    // charges and tottal amount
                if(Class==='SILVER')
                {

               var total=counter*250;
              $('#subTotal').html(total);
              if(total<250){
                var internet=0;
              }
              else{
              var internet=15;
            }
          }
          else if(Class==='GOLD')
          {



            var total=counter*350;
           $('#subTotal').html(total);
           if(total<350){
             var internet=0;
           }
           else{
           var internet=15;
         }
        //  charges end


          }

          // for scope angular

           $window.tik = counter;
           console.log( "$window"+ $window.tik);


          //end of scope
              $('#internet').html(internet);
              var payable= internet+total;
              $('#payable').html(payable);


              $('#paymentbtn').click(function () {
                 var ticketId= $('#seatSelected').html();




                var intcharges=$('#internet').html();
                var total= $('#payable').html();
                var subtotal= $('#subTotal').html();
                sessionStorage.setItem('internet',intcharges);
                sessionStorage.setItem('total',total);
                sessionStorage.setItem('subtotal',subtotal);
                sessionStorage.setItem('ticketIdd',ticketId);

              });


            });



          }
          ticket();



          $('#opt').change(function() {
            var ticketNo = $(this).val();
          $(this).next('span.out').text(ticketNo);
            function s(a){
              return ticketNo;
            }

           ticketNo2=s();

         }).trigger('change');



       });









    // $window.xx= $('#seatSelected').html();


    // scripr end

  }

  amount(){
      // window.alert(this.$window.tik);


  //  window.alert(this.$window.tik)

    if(this.$window.tik===undefined || this.$window.tik===0)
    {

  window.alert("Please Select Seat");
    }
    else{
   this.selectedTicket='payment';

    }

  }


// changed(s){
//
// };


}


angular.module('yomastertemplateApp')
  .component('ticket', {
    templateUrl: 'app/ticket/ticket.html',
    controller: TicketComponent,
    controllerAs: 'ticketCtrl'
  });

})();
