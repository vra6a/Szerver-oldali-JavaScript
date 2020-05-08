/**
 * Betölt egy adott id-hez tartozó fesztivált
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const FestivalModel = requireOption(objectrepository, 'FestivalModel');

    return async function (req, res, next) {
        res.locals.festival = await FestivalModel.findOne({ _id: req.params.festivalid})
        return next();
    };
};