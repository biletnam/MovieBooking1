/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/maps              ->  index
 * POST    /api/maps              ->  create
 * GET     /api/maps/:id          ->  show
 * PUT     /api/maps/:id          ->  update
 * DELETE  /api/maps/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Map from './map.model';

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

// Gets a list of Maps
export function index(req, res) {
  return Map.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Map from the DB
export function show(req, res) {
  return Map.find({'MovieName':req.params.showTitle}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

  // get a Length of theatre
  export function len(req,res){
    return Map.find({'MovieName':req.params.RMovieName}).exec()
      .then(handleEntityNotFound(res))
      .then(respondWithResult(res))
      .catch(handleError(res));
  }

  //get a map details as per title and Movie
        export function showMapdata(req,res){
        return Map.find({'MovieName':req.params.Title ,'location':req.params.Location}).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));



        }



// Creates a new Map in the DB
export function create(req, res) {
  return Map.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Map in the DB
export function update(req, res) {

  return Map.findOneAndUpdate({'MovieName':req.params.showTitle,'theatreName':req.params.showTheatre,'location':req.params.showCity},req.body,function(err,data){
      if(err){

        throw err;
      }
      else if(!data){
        res.json("data not found");
        console.log("data not found");
      }
      else{
      res.send(data);
}
  });

  }

  // if(req.body._id) {
  //   delete req.body._id;
  // }
  // return Map.findById(req.params.id).exec()
  //   .then(handleEntityNotFound(res))
  //   .then(saveUpdates(req.body))
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));


// Deletes a Map from the DB
export function destroy(req, res) {
  return Map.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
