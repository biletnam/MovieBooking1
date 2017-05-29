/**
 * Main model events
 */

'use strict';

import {EventEmitter} from 'events';
import Main from './main.model';
var MainEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MainEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Main.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MainEvents.emit(event + ':' + doc._id, doc);
    MainEvents.emit(event, doc);
  }
}

export default MainEvents;
