module.exports = {
    DB_PATH:   process.env.MONGOLAB_URI || process.env.DB_PATH   || 'mongodb://localhost',
};