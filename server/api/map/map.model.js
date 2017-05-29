'use strict';

import mongoose from 'mongoose';

var MapSchema = new mongoose.Schema({
  MovieName:{
    type:String,
    required:[true]

  },
  location:{
    type:String,
    required:[true]

  },

  theatreName:{
    type:String,
    required:[true]

  },
  time:{
    type:Array,
    required:[true]

  },
  date:{
    type:Array,
    required:[true]

  }

});

export default mongoose.model('Map', MapSchema);
