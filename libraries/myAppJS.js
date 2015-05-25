var _ = require('lodash');
/*
* With module.exports we can reveal our functions to other functions to use.
*/

module.exports = {
    lenghtOfEntries: lenghtOfEntries
};

function lenghtOfEntries(entries) {
    return entries.length ? entries.length : 0;
}