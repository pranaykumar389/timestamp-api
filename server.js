'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//Port Setup
var port = process.env.PORT || 8080;

//Mongoose Model require
require('./models/time-model');

//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
var timeRoute = require('./routes/time-route');
app.use('/', timeRoute);

//Views
app.use('/', express.static('views'));

app.listen(port, function() {
   console.log('Server Listening on port ' + port + '!');
});