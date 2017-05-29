/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/Addtheators              ->  index
 * POST    /api/Addtheators              ->  create
 * GET     /api/Addtheators/:id          ->  show
 * PUT     /api/Addtheators/:id          ->  update
 * DELETE  /api/Addtheators/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Addtheator from './Addtheator.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Addtheators
export function index(req, res) {
return Addtheator.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));

  }



// Gets a single Addtheator from the DB
export function show(req, res) {
  return Addtheator.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Creates a new Addtheator in the DB
export function create(req, res) {

  return Addtheator.findOne({'Name':req.params.Name,'location':req.params.location,'city':req.params.city},function(err,data) {
   if(!data)
{

      return Addtheator.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
        // res.json({"message":"data saved sucessfully"});
}
else {
    console.log("data aready added");
  res.json("Data is already added");
  window.alert('please enter All field');
}
});



    }




// Updates an existing Addtheator in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Addtheator.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Addtheator from the DB
export function destroy(req, res) {
  return Addtheator.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
