/**
 * Betölt egy adott id-hez tartozó jegytípust
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return async function (req, res, next) {
        const TicketModel = requireOption(objectrepository, 'TicketModel');
        res.locals.ticket = await TicketModel.findOne({_id: req.params.ticketid})
        return next();
    };
};