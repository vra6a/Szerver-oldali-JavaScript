const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Ticket = db.model('Ticket', {
    tipus: String,
    ar: Number,
    valid: String,
    _fest: {
        type: Schema.Types.ObjectId,
        ref: 'Festival'
    }
});

module.exports = Ticket;