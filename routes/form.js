var _ = require('lodash');
var db = require('../db/db-service');
var when = require('when');

/* This will handle GET request and will show our form page. */
exports.form = function(req, res){
  res.render('form');
};

/* This will handle POST request and save data
*  example data we get in request body: {"user":"Sarah","message":"Hello world"}
*/

exports.submit = function(req, res) {
    var newEntry = req.body;

    if(_.isEmpty(newEntry.user)) {
        newEntry.user = 'Anonymous';
    }

    db.saveEntry(newEntry)
    .then(function(message) {
        res.status(200).redirect('/');
    })
    .catch(function(err) {
        console.log('Saving to db failed ', err);
        res.status(400).end();
    });
};