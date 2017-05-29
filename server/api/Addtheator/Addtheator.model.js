'use strict';

import mongoose from 'mongoose';

var AddtheatorSchema = new mongoose.Schema({
  Name:{type:String,
  requird:[true]} ,
  location: {type:String,
  required:[true]},
  city:{ type:String,
  required:[true]}
});

export default mongoose.model('Addtheator', AddtheatorSchema);
