'use strict';

var express = require('express');
var controller = require('./omdb.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/status', controller.show);
// router.get('/mapstatus',controller.statusList);
router.post('/:Title', controller.create);

router.put('/:movie', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
