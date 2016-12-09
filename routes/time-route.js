'use strict';
var express = require('express'),
    timeRoute = express.Router(),
    time = require('../models/time');

timeRoute.get('/', time.list)
    .get('/:id', time.get);    

module.exports = timeRoute;