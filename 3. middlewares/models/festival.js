const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Festival = db.model('Festival', {
    nev: String,
    datum: String,
    helyszin: String
});

module.exports = Festival;