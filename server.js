'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');


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

app.listen(8080, function() {
   console.log('Listening on port 8080!');
});