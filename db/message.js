/*
* COMMENT:
* In javascript you can add comments between / and * like on the first row.
* Also your commented text shows as grey.
*
*
* Below you can find the data model of our messages.
* For every message we want to save the actual message but also username and time of sending it.
* This files only purpose is to tell what kind of data we want to store
*
*
* Don't worry if you don't understand everything yet.
*/

var mongoose = require('mongoose');
var schema = mongoose.Schema({
    message: String,
    user: String,
    time:  String
});

var Message = mongoose.model('Message', schema);
module.exports = Message;