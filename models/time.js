'use strict';
var mongoose = require('mongoose'),
    moment = require('moment'),
    Timestamp = mongoose.model('Timestamp');
moment().format();

var time = {

    list: function(req, res) {
        res.sendFile(process.cwd() + '/views/index.html');
    },

    get: function(req, res) {
        var id = req.params.id,
        timestamp = new Timestamp({});
        
        if(+id >= 0) {
            timestamp.unix = +id;
            timestamp.natural = moment.unix(timestamp.unix).format('MMMM D, YYYY');
        }
        if(isNaN(+id) && moment(id, 'MMMM D, YYYY').isValid()) {
            timestamp.unix = +moment(id, 'MMMM D, YYYY').format('X');
            console.log('timestamp.unix: ', timestamp.unix);
            timestamp.natural = moment.unix(timestamp.unix).format('MMMM D, YYYY');
            console.log('timestamp.natural: ', timestamp.natural);
        }
        res.json(timestamp);

    }

};

module.exports = time;