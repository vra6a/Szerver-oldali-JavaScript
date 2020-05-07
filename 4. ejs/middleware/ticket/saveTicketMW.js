/**
 * Ment egy jegytípust
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return async function (req, res, next) {
        const TicketModel = requireOption(objectrepository, 'TicketModel');

        if(!req.body.name) {
            return next();
        }

        const newticket = new TicketModel({
            _fest: req.params.festivalid,
            tipus: req.body.name,
            ar: req.body.price,
            valid: req.body.valid
        })

        await newticket.save();
        res.redirect(`/tickets/${req.params.festivalid}`);

    };
};