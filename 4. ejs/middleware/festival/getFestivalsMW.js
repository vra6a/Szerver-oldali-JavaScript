/**
 * Betölti az összes fesztivált
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const FestivalModel = requireOption(objectrepository, 'FestivalModel');

    return function (req, res, next) {
        FestivalModel.find({}, (err, festivals) =>{
            if(err) {
                return next(err);
            }

            res.locals.festivals = festivals;
            return next();
        });
    };
};