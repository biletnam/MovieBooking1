/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/omdbs              ->  index
 * POST    /api/omdbs              ->  create
 * GET     /api/omdbs/:id          ->  show
 * PUT     /api/omdbs/:id          ->  update
 * DELETE  /api/omdbs/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Omdb from './omdb.model';

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

// Gets a list of Omdbs
export function index(req, res) {
  return Omdb.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//get only mapped list
// export function statusList(req,res){
//
//   return Omdb.find({Status:false}).exec()
//   .then(respondWithResult(res))
//   .catch(handleError(res));
//
//
// }

// Gets a single Omdb from the DB
export function show(req, res) {
  return Omdb.find({'Status':true}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Omdb in the DB
export function create(req, res) {
 var title=req.body;
 return Omdb.findOne({'Title':req.params.Title},function(err,data) {
    if(!data)
    {
      return Omdb.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));

    }
    else {
      res.json("Movie aleready in list");
      console.log("Movie exist in list");
    }


 });


  // return Omdb.update({req.body.Title:"_id.Title"},{upsert:true});
}

// Updates an existing Omdb in the DB
export function update(req, res) {

    return Omdb.findOneAndUpdate({Title:req.params.movie},req.body,function(err,data) {
      console.log(req.params.movie);
       if(err)
       {
         throw err;
       }
       else if(!data)
       {
         console.log("Movie not mapped");
         res.json("Movie not mapped ");
         console.log(req.params.movie);
       }
       else{
          res.send(data);
          console.log("movie mapped sucessfully");

       }

    });
  // if (req.body._id) {
  //   delete req.body._id;
  // }
  // return Omdb.findById(req.params.id).exec()
  //   .then(handleEntityNotFound(res))
  //   .then(saveUpdates(req.body))
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));
}

// Deletes a Omdb from the DB
export function destroy(req, res) {
  console.log("not delete");
  return Omdb.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
