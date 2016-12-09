'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

(function() {
    var timeSchema = new Schema({
        unix: {
            type: Number,
            default: null
        },
        natural: {
            type: String,
            default: null
        },
        _id: false
    });

    mongoose.model('Timestamp', timeSchema);

})();
