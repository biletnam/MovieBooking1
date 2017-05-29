'use strict';

var express = require('express');
var controller = require('./map.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:showTitle', controller.show);
router.get('/getlen/:RMovieName',controller.len);
router.get('/datetime/:Title/:Location',controller.showMapdata);

router.post('/', controller.create);
router.put('/:showCity/:showTitle/:showTheatre', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
