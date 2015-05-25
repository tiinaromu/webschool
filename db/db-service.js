var mongoose = require('mongoose');
var env = require('../env');
var Message = require('./message');
var when = require('when');
var _ = require('lodash');
var moment = require('moment');

module.exports = {
    initDBConnection: initDBConnection,
    saveEntry: saveEntry,
    getEntries: getEntries
};

function initDBConnection() {
    mongoose.connect(env.DB_PATH + '/live-feed-tool');
    mongoose.connection.on('error', console.error.bind(console, 'mongodb connection error:'));
    mongoose.connection.once('open', function () {
        console.log('mongodb connection opened');
    });
}

function saveEntry(entry) {
    var deferred = when.defer();
    var date = moment().format('MMMM Do YYYY, h.mm a');
    var newEntry = new Message({
        message: entry.message,
        user: entry.user,
        time:  date
    });

    newEntry.save(function(err, message) {
        if(err) {
            deferred.reject(err);
        } else {
            deferred.resolve(message);
        }
    });
    return deferred.promise;
}

function getEntries() {
    var deferred = when.defer();
    Message.find({ }).lean().exec(function (err, messages) {
        if(err) {
            deferred.reject(err);
        }
        else {
            _(messages).reverse();
            deferred.resolve(messages);
        }
    });
    return deferred.promise;
}
