/**
 * Created by nancyli on 8/19/17.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('listing', {
    title : { type: String },
    username : { type: String},
    description : { type:String }
});