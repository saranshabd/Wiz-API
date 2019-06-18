'use strict';

const { Router } = require('express');

const router = Router();

// load all sub-routes
router.use('/public', require('./public'));
router.use('/projects', require('./projects'));
router.use('/programming', require('./programming'));

module.exports = router;
