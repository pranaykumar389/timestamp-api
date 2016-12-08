'use strict';
var mongoose = require('mongoose'),
    Timestamp = mongoose.model('Timestamp');

var time = {

    list: function(req, res) {
        Timestamp.find(function(err, result) {
            if(err) {
                console.log('Could not get the list');
                res.status(500).send(error, 'Could not get the list');
            }else {
                res.sendFile(process.cwd() + '/views/index.html');
            }
        });
    }

};

module.exports = time;