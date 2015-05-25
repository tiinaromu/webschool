var db = require('../db/db-service');
var lib = require('../libraries/myAppJS');

/* this handles request to GET home page. */
exports.index = function(req, res){
    db.getEntries()
    .then(function(entries) {
        var count = lib.lenghtOfEntries(entries);
        res.render('index', { messages: entries, count: count });
    }).catch(function(err) {
        console.log('Error fetching data:', err);
        res.render('index', { });
    });
};