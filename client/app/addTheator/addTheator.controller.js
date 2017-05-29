'use strict';




(function(){



class AddTheatorComponent {





  constructor($scope,$http,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.socket=socket;
    this.theatreByCity=[];
    this.movieName=[];
    this.showMovie=[];
    this.theatre=[];
    this.UpdateTime=[];
    this.UpdateDate=[];
    this.MappigDetails=[];
    this.$scope=$scope;
    this.time=[];
    this.box=[];
    this.dates=[];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('Addtheator');
   });


   // script

       $(document).ready(function() {
         $('div.movie-tab-menu>div.list-group>a').click(function(e) {
             e.preventDefault();
             $(this).siblings('a.active').removeClass('active');
             $(this).addClass("active");
             var index = $(this).index();
             $('div.movie-tab>div.movie-tab-content').removeClass('active');
             $('div.movie-tab>div.movie-tab-content').eq(index).addClass('active');
         });



             $('#undo_redo').multiselect();


       });
   // end Script



     }




      //  update datetime in model
  updateTimes(){


      if(this.Uhr==='HH' && this.Umin==='MM' ){

      }
      else if(this.Uhr==='HH' || this.Umin==='MM'){

      }
      else{
          this.UpdateTime.push({  time:this.Uhr + '-' + this.Umin + '-' + this.Utype  });
    }




  }

  removeUpdateTime(y){
    var remove= this.UpdateTime.indexOf(y);
   this.UpdateTime.splice(remove,1);

  }

  addUpdateDate(){

 if(this.Udate!==undefined){
   this.UpdateDate.push({
    date:this.Udate

   });
 }

  }
  removeUpdateDate(d){
    var remove= this.UpdateDate.indexOf(d);
   this.UpdateDate.splice(remove,1);

  }

// end update modal

  //  add time and date and remove array
  removeTime(y){
    var remove= this.time.indexOf(y);
   this.time.splice(remove,1);

  }

 addTime(){

   if(this.hr==='HH' && this.min==='MM'){
        window.alert('please enter valid date & time');
   }
   else if(this.hr==='HH' || this.min==='MM'){
  window.alert('please enter valid date  & time');   }

else{

  this.time.push({
 time:this.hr + "-" + this.min + "-" + this.type});

}

}


   addDate(){
   if(this.date===undefined)
   {
    window.alert('please enter valid date');
   }
   else if(this.data===''){
  window.alert('please enter valid date');   }
   else{
     this.dates.push({
     date:this.date
      });
   }

  }

   removeDate(d){
     var remove= this.dates.indexOf(d);
    this.dates.splice(remove,1);
  }

  // end array
  $onInit(){

   this.$http.get('/api/Addtheators').then(response =>{
         this.theatre=response.data;
           this.socket.syncUpdates('Addtheator', this.theatre);
      });

  this.$http.get('/api/omdbs').then(response=>{
     this.movieName=response.data;
     this.socket.syncUpdates('omdb',this.movieName);
  });

  this.box.push({
    theatre:this.selBox
  });
        //  mapping details
  this.$http.get('/api/maps').then(response=>{
      this.MappigDetails=response.data;

    this.socket.syncUpdates('map',this.MappigDetails);
  });



}
            // time and date update
saveUpdate(){

this.$http.put('/api/maps/' + this.showCity + '/' + this.showTitle + '/' + this.showTheatre,{
        date:this.UpdateDate,
        time:this.UpdateTime

});

}

            // add theatre details in mongo
   addTheatre(){
         this.$http.post('/api/Addtheators/' + this.Name + '/' + this.city + '/' + this.location ,{
           Name:this.Name,
           location:this.location,
           theatreName:this.search,
           city:this.city

             });

             }

    deleteTheator(t){
         this.$http.delete('/api/Addtheators/' + t._id);

    }

    removeMovie(n){
          this.$http.delete('/api/maps/' + n._id);
          this.$http.get('/api/maps/getlen/' + this.RMovieName).then(response=>{
             var len=response.data.length;
              //  alert(response.data.length);

              console.log('length of' +len);

             if(len===0){
               this.$http.put('/api/omdbs/' + this.RMovieName ,{

                Status:false
               });


             }

         });

        }

    mapping()
    {
     this.$http.post('/api/maps',{
      MovieName:this.movie,
      location:this.city,
      theatreName:this.search,
      time:this.time,
      date:this.dates

     });

     this.$http.put('/api/omdbs/' + this.movie ,{

      Status:true
     });

     }



}

angular.module('yomastertemplateApp')
  .component('addTheator', {
    templateUrl: 'app/addTheator/addTheator.html',
    controller: AddTheatorComponent,
    controllerAs: 'addTheatorCtrl'
  });

})();
