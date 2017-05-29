'use strict';

import mongoose from 'mongoose';

var RatingSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Rating', RatingSchema);
