'use strict';

(function(){

class OmdbComponent {
  constructor($scope,$http,socket) {
    this.message = 'Hello';
    this.socket=socket;
    this.$http=$http;
    this.useData=[];
    this.getDataDb=[];


          $scope.$on('$destroy', function() {
            socket.unsyncUpdates('omdb');
          });


          $(document).ready(function () {
          $('#button').click(function() {
            var x=$('#fval').val();

           var y=$('#title td:eq(1)').html();


            if(x!=="" && y!==""){
              $('#table').slideDown(function () {
                  $('h5').fadeOut(100);
                $('#bt2').click(function () {
                    $('#table').slideUp();
                  });

              });
          }
            else{
              $('h5').fadeIn(100);
              $('#table').slideUp();
          }});
          });



  }

  SearchMovie(){
    if(this.movieName!==undefined){


      this.$http.get('http://www.omdbapi.com/?t='+ this.movieName + '&type=movie&tomatoes=true').then(response=>{

                    this.useData=response.data;

                  });

}
}

 AddMovie(){this.$http.post('/api/omdbs/' + this.useData.Title,{
   Title:this.useData.Title,
   Langauge:this.useData.Language,
   Poster:this.useData.Poster,
   Year:this.useData.Year,
   Director:this.useData.Director,
   Runtime:this.useData.Runtime,
   Genre:this.useData.Genre,
   Actors:this.useData.Actors






 });



 }

 $onInit(){

    this.$http.get('/api/omdbs').then(response=> {
      this.getDataDb=response.data;
    this.socket.syncUpdates('omdb', this.getDataDb);
    });


 }
 delete(x){
  this.$http.delete('/api/omdbs/' + x._id);

 }


   }



angular.module('yomastertemplateApp')
  .component('omdb', {
    templateUrl: 'app/omdb/omdb.html',
    controller: OmdbComponent,
    controllerAs: 'omdbCtrl'
  });

})();
