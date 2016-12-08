'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

(function() {
    var timeSchema = new Schema({
        unix: {
            type: String
        },
        natural: {
            type: Date
        }
    });

    mongoose.model('Timestamp', timeSchema);

})();
