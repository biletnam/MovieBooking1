'use strict';

import mongoose from 'mongoose';

var MainSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Main', MainSchema);
