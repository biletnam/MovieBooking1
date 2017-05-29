/**
 * Omdb model events
 */

'use strict';

import {EventEmitter} from 'events';
import Omdb from './omdb.model';
var OmdbEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OmdbEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Omdb.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    OmdbEvents.emit(event + ':' + doc._id, doc);
    OmdbEvents.emit(event, doc);
  }
}

export default OmdbEvents;
