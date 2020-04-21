/**
 * Betölti az összes fesztivált
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.festivalList = [];
        next();
    };
};