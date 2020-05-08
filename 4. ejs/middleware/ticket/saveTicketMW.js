/**
 * Ment egy jegytípust
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return async function (req, res, next) {
        const TicketModel = requireOption(objectrepository, 'TicketModel');

        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.price === 'undefined' ||
            typeof req.body.valid === 'undefined'
        ) {
            return next();
        }
        if (typeof res.locals.ticket === 'undefined') {
            res.locals.ticket = new TicketModel();
            res.locals.ticket._fest = req.params.festivalid;
        }

        res.locals.ticket.tipus = req.body.name,
        res.locals.ticket.ar = req.body.price,
        res.locals.ticket.valid = req.body.valid


        await res.locals.ticket.save();
        res.redirect(`/tickets/${res.locals.ticket._fest}`);

    };
};