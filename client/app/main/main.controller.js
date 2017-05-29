'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket,Auth) {
      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;
      this.awesomeThings = [];
      this.stat = [];
      this.mappingdetails=[];
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;


      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });


              //  script
                  $(document).ready(function(){
                    var classvalue;
                    var location;
                    var Novalue;

              $('#modalbtn').click(function() {
              $('#modalSelect').change(function() {
               location = $(this).val();
              $(this).next('span.out').text(location);


                   sessionStorage.setItem("Location",location);


              }).trigger('change');




               });

               $('.NO').click(function() {

                  var id = $(this).attr('id');


                           Novalue=  $('#'+ id).attr('value');

                            sessionStorage.setItem('TicketNo', Novalue);



                  console.log(Novalue);


              });

              $('.class').click(function () {
                var id=$(this).attr('id');
                 classvalue=$('#' + id).attr('value');
                  console.log(classvalue);
                sessionStorage.setItem('Class' ,classvalue);


              });

           $('#modalbtn').click(function () {
                // var x=sessionStorage.getItem('TicketNo');
                //   var y=sessionStorage.getItem('Class');
                        if(classvalue===undefined){

                          window.alert("Plese Select the Class");
                        }
                        else if (Novalue===undefined) {
                           window.alert('please Select No Of Ticket');
                        }
                        else{

                           window.location.href="/dateandtimesel"
                        }


           });

            });




                                    // script



    }



    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });

        this.$http.get('/api/omdbs/status').then(response=>{

          this.stat=response.data;
          console.log(this.stat);



          this.socket.syncUpdates('omdb', this.status);
        });

        this.$http.get('/api/maps').then(response=>{
           this.mappingdetails=response.data;
           console.log(this.mappingdetails);
             this.socket.syncUpdates('map', this.mappingdetails);
        });


    }




    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {

      this.$http.delete('/api/things/' + thing._id);
    }

    addSession(x){

      sessionStorage.setItem('Title',x.Title);
      sessionStorage.setItem('Language',x.Langauge);
      sessionStorage.setItem('Genre',x.Genre);
      sessionStorage.setItem('poster',x.Poster);


    }
  }

  angular.module('yomastertemplateApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'MainControllerCtrl'
    });
})();
