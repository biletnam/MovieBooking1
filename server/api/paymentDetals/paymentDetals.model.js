'use strict';

import mongoose from 'mongoose';

var PaymentDetalsSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('PaymentDetals', PaymentDetalsSchema);
