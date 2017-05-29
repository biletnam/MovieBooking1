/**
 * PaymentDetals model events
 */

'use strict';

import {EventEmitter} from 'events';
import PaymentDetals from './paymentDetals.model';
var PaymentDetalsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PaymentDetalsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  PaymentDetals.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PaymentDetalsEvents.emit(event + ':' + doc._id, doc);
    PaymentDetalsEvents.emit(event, doc);
  }
}

export default PaymentDetalsEvents;
