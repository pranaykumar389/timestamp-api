'use strict';
var mongoose = require('mongoose'),
    moment = require('moment'),
    Timestamp = mongoose.model('Timestamp');

var time = {

    list: function(req, res) {
        res.sendFile(process.cwd() + '/views/index.html');
    },

    get: function(req, res) {
        var id = req.params.id,
        timestamp = new Timestamp({});

        function unixToNatural(unix) {
            return moment.unix(unix).format('MMMM D, YYYY');
        }
        function naturalToUnix(id) {
            return moment(id, 'MMMM D, YYYY').format('X');
        }
        
        if(parseInt(id) >= 0) {
            timestamp.unix = parseInt(id);
            timestamp.natural = unixToNatural(timestamp.unix);
        }
        if(isNaN(parseInt(id)) && moment(id, 'MMMM D, YYYY').isValid()) {
            timestamp.unix = parseInt(naturalToUnix(id)); 
            timestamp.natural = unixToNatural(timestamp.unix); 
        
        }
        res.json(timestamp);

    }

};

module.exports = time;