/**
 * Betölt az összes jegytípust
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return async function (req, res, next) {
        const TicketsModel = requireOption(objectrepository, 'TicketModel');
        const tickets = await TicketsModel.find({_fest: req.params.festivalid});
        res.locals.tickets = tickets;
        return next();
    };
};