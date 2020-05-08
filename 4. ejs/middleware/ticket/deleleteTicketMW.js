/**
 * Töröl egy jegytípust
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    
    return async function (req, res, next) {
        const TicketModel = requireOption(objectrepository, 'TicketModel');
        const ticket = await TicketModel.findOne({_id: req.params.ticketid});
        await TicketModel.deleteOne({_id: req.params.ticketid});
        res.redirect(`/tickets/${ticket._fest}`);
    };
};