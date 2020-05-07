/**
 * Töröl egy fesztivált
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return async function(req, res, next) {
            const FestivalModel = requireOption(objectrepository, 'FestivalModel');
            await FestivalModel.deleteOne({_id: req.params.festivalid});
            res.redirect('/');
    };
};