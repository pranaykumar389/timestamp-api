'use strict';

var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

//Mongoose Connection
mongoose.connect('mongodb://localhost/timestamp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
    console.log('Connection Established to timestamp');
});


//Mongoose Model require
require('./models/time-model');

//Routes
var timeRoute = require('./routes/time-route');
app.use('/', timeRoute);

//Views
app.use('/', express.static('views'));

app.listen(8080, function() {
   console.log('Listening on port 8080!');
});