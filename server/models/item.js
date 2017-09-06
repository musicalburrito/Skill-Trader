var mongoose = require('mongoose');

module.exports = mongoose.model('Username', {
    username : {type: String}
});