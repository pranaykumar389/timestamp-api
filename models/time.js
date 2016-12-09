'use strict';
var mongoose = require('mongoose'),
    moment = require('moment'),
    Timestamp = mongoose.model('Timestamp');
moment().format();

var time = {

    list: function(req, res) {
        res.sendFile(process.cwd() + '/views/index.html');
    },

};

module.exports = time;